import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  Database,
  get,
  DatabaseReference,
} from "firebase/database";
import {
  getAuth,
  inMemoryPersistence,
  signInWithCustomToken,
} from "firebase/auth";
import debugbackend from "../debugbackend";
import { errors } from "blooket-frontend-tools";

// set a new value to firebase every 5 seconds
const testPeriod = 5 * 1000;

// run the test for 5 minutes to make sure it works
// for long-running connections
const testDuration = 5 * 60 * 1000;
// const testDuration = 15 * 1000;

export type FirebaseTester = {
  result: Promise<boolean>;
  clear: () => void;
  startedAt: number;
  endingAt: number;
};

// firebaseTest runs the test of the firebase functionality
// It first fetches the authentication information from the backend
// and then utilizes in periodically to make changes to the firebase
// realtime database, observing the changes to confirm they match
// the intent.
// After some length of time where the changes are made and observations
// are working correctly, the test will have passed and resolves true.
export const firebaseTest = (): FirebaseTester => {
  // run the loop in a promise that can be returned to the caller
  let timer: ReturnType<typeof setInterval>;
  const startedAt = new Date().getTime();
  const endingAt = startedAt + testDuration;
  let debugref: DatabaseReference | undefined;
  const p = new Promise<boolean>(async (resolve, reject) => {
    try {
      const data = await debugbackend.firebaseParams({});

      const currDateStr = new Date().toISOString();

      // check that we can write to each of the firebase shards
      data.prodShards.forEach(async (ps) => {
        try {
          const db = await fbdb(ps.id, ps.token, ps.url);
          const path = `debug/${ps.id}`;
          const r = ref(db, path);
          await set(r, currDateStr);
          const data = await get(r);
          if (data.val() !== currDateStr) {
            console.error(`firebase value on ${ps.url} ${ps.id} not matching`);
            resolve(false);
          }
          await set(r, null);
        } catch (e) {
          console.error(
            `could not update firebase value on ${ps.url} ${ps.id}`,
            e,
          );
          resolve(false);
        }
      });

      // if we've established we can connect to all of the shards, now
      // run the long-running debug test that writes more values over time
      const debugid = data.debugShard?.id;
      if (!debugid) {
        console.error("cannot start firebase test without id");
        resolve(false);
        return;
      }
      const db = await fbdb(
        data.debugShard?.id,
        data.debugShard?.token,
        data.debugShard?.url,
      );
      debugref = ref(db, debugid);

      // TODO in a development environment react renders two copies of components
      // which means this is initialized twice with two separate firebase auth
      // tokens.  But firebase is currently not saving these tokens separately,
      // so one of them is getting a permission_denied from firebase.  Fix this
      // by their only mounting one copy of the component or by figuring out
      // how to run this so it doesn't run two compies of the data fetch ops
      // even with two components mounting at the same time.

      let elapsed = 1;
      set(debugref, elapsed);

      timer = setInterval(() => {
        if (!debugref) {
          throw new Error("lost reference to debugref");
        }
        try {
          const now = new Date().getTime();
          if (now > endingAt) {
            set(debugref, null);
            clearInterval(timer);
            resolve(true);
            return;
          }
          elapsed = now - startedAt;
          set(debugref, elapsed);
        } catch (e: any) {
          clearInterval(timer);
          reject(e);
          return;
        }
      }, testPeriod);

      // listen for changes and make sure they match the value stored locally
      onValue(debugref, (snapshot: any) => {
        if (!snapshot) return;
        const observed = snapshot.val();
        if (!observed) {
          clearInterval(timer);
          reject("observed value should be truthy");
          return;
        }
        if (observed !== elapsed) {
          clearInterval(timer);
          reject(`observed value ${observed} doesn't match elapsed ${elapsed}`);
          return;
        }
      });
    } catch (e) {
      console.error("running firebase test", e);
      errors.logError("running firebase test", e);
      resolve(false);
    }
  });

  // the caller should clear the interval if the component is unmounted
  const clear = () => {
    if (debugref) {
      set(debugref, null);
    }
    clearInterval(timer);
  };

  return {
    result: p,
    clear: clear,
    startedAt: startedAt,
    endingAt: endingAt,
  };
};

const fbdb = async (
  id?: string,
  token?: string,
  shardURL?: string,
): Promise<Database> => {
  if (!id) {
    throw new Error("cannot start firebase test without valid id");
  }

  if (!token) {
    throw new Error("cannot start firebase test without token");
  }

  if (!shardURL) {
    throw new Error("cannot start firebase test without shardURL");
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
    authDomain: "blooket-2020.firebaseapp.com",
    databaseURL: shardURL,
    projectId: "blooket-2020",
    storageBucket: "blooket-2020.appspot.com",
    messagingSenderId: "741533559105",
    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
    measurementId: "G-S3H5NGN10Z",
  };
  const app = initializeApp(firebaseConfig, id);
  const auth = getAuth(app);
  await auth.setPersistence(inMemoryPersistence);
  await signInWithCustomToken(auth, token);

  const db = getDatabase(app);

  return db;
};

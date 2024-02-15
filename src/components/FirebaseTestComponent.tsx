import React, { useEffect, useState } from "react";
import { firebaseTest, FirebaseTester } from "../debugtests/firebase";
import TestSummary from "./TestSummary";

const FirebaseTestComponent = () => {
  const testInfo = {
    title: "Firebase",
    desc: "Used for interactive game play.  This test will run for 5 minutes to determine whether there are problems with long-running connections from your browser.  While the icon spins, the connection is working as expected.",
    fix: "If this test fails immediately, make sure you have whitelisted *.firebaseio.com. If this test fails after more than 10 seconds, please ensure your firewall does not close long-running TCP connections.",
  };

  const [passed, setPassed] = useState<boolean | "pending" | null>(null);
  const [endingAt, setEndingAt] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    let fb: FirebaseTester;

    try {
      fb = firebaseTest();
      setPassed("pending");
      setEndingAt(fb.endingAt);

      fb.result.then((didPass) => {
        setPassed(didPass);
        setEndingAt(new Date().getTime());
      });
    } catch (e: any) {
      console.error("error running firebase test", e);
      setPassed(false);
    }

    return () => {
      fb.clear();
    };
  }, [setPassed, setEndingAt]);

  useEffect(() => {
    const timer = setInterval(() => {
      const n = new Date().getTime();
      let remainingSeconds = Math.floor((endingAt - n) / 1000);
      if (remainingSeconds < 0) {
        remainingSeconds = 0;
        clearInterval(timer);
      }
      const rMin = Math.floor(remainingSeconds / 60);
      const rSec = Math.floor(remainingSeconds % 60);
      const rSecStr = rSec > 9 ? `${rSec}` : `0${rSec}`;
      setTimeLeft(`${rMin}:${rSecStr}`);
    }, 1000);

    // cleanup the timer internal
    return () => {
      clearInterval(timer);
    };
  }, [endingAt, setTimeLeft]);

  return (
    <div className="firebase-wrapper">
      <div className="firebase-timer">{timeLeft}</div>
      <TestSummary test={testInfo} passed={passed} />
    </div>
  );
};

export default FirebaseTestComponent;

// testFetch returns an async function that checks the url provided
// returning true only if the response status is one of the provided
// status codes
export const testFetch = (url: string, acceptedStatusCodes: number[]) => {
  return async () => {
    const res = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      redirect: "manual",
      referrerPolicy: "no-referrer",
    });
    const status = res.status;
    return acceptedStatusCodes.includes(status);
  };
};

export interface IndivURLTest {
  url: string;
  credentials: boolean;
}

export const testFetchMany = (
  urlTests: IndivURLTest[],
  acceptedStatusCodes: number[],
) => {
  return async () => {
    const tests: Promise<boolean>[] = [];
    for (const t of urlTests) {
      tests.push(
        new Promise<boolean>(async (resolve, reject) => {
          try {
            const res = await fetch(t.url, {
              method: "GET",
              cache: "no-cache",
              mode: "cors",
              referrerPolicy: "no-referrer",

              // because some of the endpoints may require sessions,
              // follow the redis to eventually get a 200 response
              // this may fail in development because of a mismatch
              // between cookie domains
              // TODO have the local test urls be local so cookie domains match
              redirect: "follow",

              // tests for blooket services should include the cookie,
              // but requests for external services with *.blooket.com subdomains
              // (like cloudinary) should not
              credentials: t.credentials ? "include" : "omit",
            });
            const status = res.status;
            if (acceptedStatusCodes.includes(status)) {
              resolve(true);
            } else {
              reject(
                `response from ${t.url} is ${
                  res.status
                } which was not a valid member of ${acceptedStatusCodes.join(
                  ",",
                )}`,
              );
            }
          } catch (e: any) {
            console.error(e);
            reject(`error from ${t.url} is ${e}`);
          }
        }),
      );
    }

    // return false if any of the requests return false,
    // otherwise, the test passed, so return true
    try {
      const allResults = await Promise.all(tests);
      if (allResults.includes(false)) {
        return false;
      }
      return true;
    } catch (e: any) {
      console.error("error running all endpoints tests", e);
      return false;
    }
  };
};

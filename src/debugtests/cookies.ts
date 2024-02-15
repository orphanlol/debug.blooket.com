import { errors } from "blooket-frontend-tools";
import debugbackend from "../debugbackend";

export const CookiesTest = {
  title: "Cookies",
  desc: "Used to store login information",
  fix: "Enable first-party cookies in your browser session.",
  test: async () => {
    try {
      const firstres = await debugbackend.setCookie({});
      const cookieVal = firstres.cookieValue;
      if (!cookieVal) {
        console.error("cannot proceed without cookieValue");
        return false;
      }

      const secondres = await debugbackend.setCookie({});
      const secondCookieVal = secondres.cookieValue;
      if (!secondCookieVal) {
        console.error("cannot proceed with cookieValue on second request");
        return false;
      }

      if (secondCookieVal !== cookieVal) {
        console.error(
          `cookie values do not match: ${cookieVal} !== ${secondCookieVal}`,
        );
        return false;
      }
    } catch (e) {
      console.error("running cookies test", e);
      errors.logError("running cookies test", e);
      return false;
    }

    return true;
  },
};

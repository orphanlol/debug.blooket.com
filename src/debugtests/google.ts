import { testFetchMany } from "./fetchtester";

export const GoogleTest = {
  title: "Google APIs",
  desc: "Used for Google Fonts, Google Login, ReCAPTCHA, and some Firebase-related services",
  fix: "Please whitelist *.google.com, *.gstatic.com, *.googleapis.com",
  test: testFetchMany(
    [
      {
        url: "https://fonts.gstatic.com/s/titanone/v13/mFTzWbsGxbbS_J5cQcjClDgm-khykw.woff2",
        credentials: false,
      },
      {
        url: "https://fonts.googleapis.com/css2?family=Macondo&display=swap",
        credentials: false,
      },
      { url: "https://apis.google.com/js/api.js", credentials: false },
    ],
    [200],
  ),
};

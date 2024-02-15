import { testFetch } from "./fetchtester";

export const FontAwesomeAccessTest = {
  title: "Font Awesome",
  desc: "Used to view icons",
  fix: "Whitelist *.fontawesome.com",
  test: testFetch("https://kit.fontawesome.com/984809ea42.js", [200]),
};

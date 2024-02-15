export const LocalStorageTest = {
  title: "LocalStorage",
  desc: "Used to store temporary settings shared between browser windows and tabs",
  fix: "Enable the use of LocalStorage in your browser settings.",
  test: async () => {
    if (!window) return false;
    if (!window.localStorage) return false;
    if (!window.localStorage.setItem) return false;
    if (!window.localStorage.getItem) return false;

    window.localStorage.setItem("TEST-KEY", "test");
    const result = window.localStorage.getItem("TEST-KEY");
    return result === "test";
  },
};

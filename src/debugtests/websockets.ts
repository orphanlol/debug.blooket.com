export const WebsocketsTest = {
  title: "WebSockets",
  desc: "Used to participate in live games",
  fix: "Enable the use of WebSockets in your browser settings.",
  test: async () => {
    if ("WebSocket" in window || "MozWebSocket" in window) {
      return true;
    } else {
      return false;
    }
  },
};

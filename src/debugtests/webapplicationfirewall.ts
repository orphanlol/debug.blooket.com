import { errors } from "blooket-frontend-tools";
import debugbackend from "../debugbackend";

export const BlooketWAFTest = {
  title: "Web Application Firewall (IP Address Check)",
  desc: "Used to filter out known or suspected malicious web traffic.",
  fix: "Try turning off any VPNs while using Blooket.  If you're not using a VPN and are still having trouble, it's possible your IP address has been flagged as malicious by 3rd party security reasearchers.  Contact us with the IP address we've detected for you (shown just above) and we'll look into it for you.",
  test: async () => {
    try {
      await debugbackend.wafCheck({});
    } catch (e) {
      console.error("checking waf", e);
      errors.logError("checking waf", e);
      return false;
    }
    return true;
  },
};

import { loadStripe } from "@stripe/stripe-js";
import debugbackend from "../debugbackend";
import { errors } from "blooket-frontend-tools";

export const StripeTest = {
  title: "Stripe",
  desc: "Used for subscriptions and payments.",
  fix: "Please whitelist *.stripe.com in your network firewall settings.",
  test: async () => {
    try {
      const keydata = await debugbackend.stripeKey({});
      const stripePublishableKey = keydata.stripePublishableKey;
      if (!stripePublishableKey) {
        console.error("cannot proceed without valid stripePublishableKey");
        return false;
      }

      const stripe = await loadStripe(stripePublishableKey);
      if (!stripe) {
        return false;
      }

      return true;
    } catch (e) {
      console.error("checking stripe", e);
      errors.logError("checking stripe", e);
      return false;
    }
  },
};

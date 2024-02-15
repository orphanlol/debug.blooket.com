import React, { useEffect, useState } from "react";

import TestSummary from "./TestSummary";

const RecaptchaTestComponent = () => {
  const testInfoReady = {
    title: "ReCAPTCHA",
    desc: "Used to protect against bot traffic.",
    fix: "Make sure you have whitelisted www.google.com in your firewall, and check the browser console to see if there are other URLs not correctly loading.",
  };
  const testInfoToken = {
    title: "ReCAPTCHA",
    desc: "Used to protect against bot traffic.",
    fix: "Your browser is not passing the reCAPTCHA test.  This means Google thinks this session is most likely a bot.  Please try using a different browser.",
  };

  const [recaptchaReady, setRecaptchaReady] = useState<boolean | null>(null);
  const [passed, setPassed] = useState<boolean | null>(null);

  const recaptchaKeyId = process.env.REACT_APP_RECAPTCHA_KEY_ID;

  useEffect(() => {
    if (!recaptchaKeyId) {
      setRecaptchaReady(false);
      return;
    }
    grecaptcha.enterprise.ready(async () => {
      setRecaptchaReady(true);
      const token = await grecaptcha.enterprise.execute(recaptchaKeyId, {
        action: "debug",
      });
      if (!token) {
        setPassed(false);
        return;
      }

      setPassed(true);
    });
  }, [setPassed, setRecaptchaReady, recaptchaKeyId]);

  if (!recaptchaReady) {
    return <TestSummary test={testInfoReady} passed={recaptchaReady} />;
  }

  return <TestSummary test={testInfoToken} passed={passed} />;
};

export default RecaptchaTestComponent;

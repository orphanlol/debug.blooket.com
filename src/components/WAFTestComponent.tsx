import React, { useEffect, useState } from "react";
import { BlooketWAFTest } from "../debugtests/webapplicationfirewall";
import TestSummary from "./TestSummary";
import debugbackend from "../debugbackend";
import { errors } from "blooket-frontend-tools";

const WAFTestComponent = () => {
  const testInfo = BlooketWAFTest;
  const testFunc = BlooketWAFTest.test;

  const [ipAddressLabel, setIPAddressLabel] = useState<string | undefined>(
    undefined,
  );
  const [passed, setPassed] = useState<boolean | null>(null);

  useEffect(() => {
    const getIP = async () => {
      const res = await debugbackend.endUserIP({});
      if (res && res.ipAddress) {
        setIPAddressLabel(
          `We've detected your public IP Address as: ${res.ipAddress}`,
        );
      }
    };
    try {
      getIP();
    } catch (e: any) {
      console.error("getting remote ip address", e);
      errors.logError("getting remote ip address", e);
      setPassed(false);
    }
  }, [setIPAddressLabel]);

  useEffect(() => {
    const testIt = async () => {
      const p = await testFunc();
      setPassed(p);
    };
    try {
      testIt();
    } catch (e: any) {
      console.error("error running firebase test", e);
      errors.logError("error running firebase test", e);
      setPassed(false);
    }
  }, [testFunc, setPassed]);

  return (
    <TestSummary test={testInfo} passed={passed} extraInfo={ipAddressLabel} />
  );
};

export default WAFTestComponent;

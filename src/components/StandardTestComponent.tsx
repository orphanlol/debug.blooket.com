import React, { useEffect, useState } from "react";
import { DebugTest } from "../debugtests";

import TestSummary from "./TestSummary";

interface StandardTestComponentProps {
  test: DebugTest;
}

const StandardTestComponent = (props: StandardTestComponentProps) => {
  const test = props.test;

  const [passed, setPassed] = useState<boolean | null>(null);
  useEffect(() => {
    if (!test) return;
    (async () => {
      try {
        const v = await test.test();
        setPassed(v);
      } catch (e: any) {
        console.error(e);
        setPassed(false);
      }
    })();
  }, [test, setPassed]);

  return <TestSummary test={test} passed={passed} />;
};

export default StandardTestComponent;

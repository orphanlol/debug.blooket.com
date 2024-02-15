import React from "react";
import { DebugTestInfo } from "../debugtests";
import TestStatusIndicator from "./TestStatusIndicator";

import "./TestSummary.css";

interface TestSummaryProps {
  test: DebugTestInfo;
  passed: boolean | "pending" | null;
  extraInfo?: string;
}

const TestSummary = (props: TestSummaryProps) => {
  const test = props.test;
  const passed = props.passed;
  const extraInfo = props.extraInfo;

  return (
    <div className="test-container">
      <TestStatusIndicator passed={passed} />

      <div className="test-info">
        <div className="test-title">{test.title}</div>
        <div>{test.desc}</div>
        {extraInfo && <div className="text-extrainfo">{extraInfo}</div>}
        {!passed && <div className="test-fix">THE FIX: {test.fix}</div>}
      </div>
    </div>
  );
};

export default TestSummary;

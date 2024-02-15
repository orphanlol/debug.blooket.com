import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./TestStatusIndicator.css";

interface TestStatusIndicatorProps {
  passed: boolean | "pending" | null;
}

const TestStatusIndicator = (props: TestStatusIndicatorProps) => {
  let icon = null;
  if (props.passed === null) {
    icon = <FontAwesomeIcon icon={faSpinner} spin size="xl" />;
  } else if (props.passed === "pending") {
    icon = <FontAwesomeIcon icon={faSpinner} spin size="xl" color="#4bc22e" />;
  } else if (props.passed) {
    icon = <FontAwesomeIcon icon={faCheck} size="xl" color="#4bc22e" />;
  } else {
    icon = <FontAwesomeIcon icon={faTimes} size="xl" color="#ff462b" />;
  }

  return <div className="indicator-icon">{icon}</div>;
};

export default TestStatusIndicator;

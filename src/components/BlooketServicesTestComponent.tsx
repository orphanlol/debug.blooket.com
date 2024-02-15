import React from "react";

import StandardTestComponent from "./StandardTestComponent";
import { BlooketEndpointsTest } from "../debugtests/blooketendpoints";

const BlooketServicesTestComponent = () => {
  return <StandardTestComponent test={BlooketEndpointsTest} />;
};

export default BlooketServicesTestComponent;

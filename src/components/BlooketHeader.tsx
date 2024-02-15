import React from "react";

import "./BlooketHeader.css";

// TODO this component should exist in the shared frontend library so it can
// be reused across the entire platform
const BlooketHeader = () => {
  return (
    <div className="blooket-header">
      <a href="https://www.blooket.com/" className="blooket-header-title">
        Blooket
      </a>
    </div>
  );
};

export default BlooketHeader;

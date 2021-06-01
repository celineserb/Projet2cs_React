import React from "react";
import { TheContent, TheSidebar } from "./index";
import { TheFooter, TheHeader } from '../'

import { withRouter } from "react-router-dom";

const TheLayout = (props) => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body" style={{
          backgroundColor: "#fff"
        }}>
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default withRouter(TheLayout);

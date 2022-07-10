import React from "react";

const Divider = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
      <div
        style={{ width: "100%", height: "4px", background: "#0A8BFE" }}
      ></div>
      <span style={{ padding: "0 10px" }}>or</span>
      <div
        style={{ width: "100%", height: "4px", background: "#0A8BFE" }}
      ></div>
    </div>
  );
};

export default Divider;

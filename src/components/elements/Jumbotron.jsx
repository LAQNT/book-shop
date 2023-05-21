import React from "react";
import Timer from "./Timer";

function Jumbotron() {
  return (
    <>
      <div className="jumbotron py-3">
        <p>New realeases with the best prices</p>
        <span>free delivery season ends in</span>
        <Timer />
      </div>
    </>
  );
}

export default Jumbotron;

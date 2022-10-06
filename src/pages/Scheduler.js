import React from "react";
import Events from "../components/Events";

function Scheduler() {
  return (
    <div className="scheduler">
      <Events scheduler={true} />
    </div>
  );
}

export default Scheduler;

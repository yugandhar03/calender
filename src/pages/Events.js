import React from "react";
import Events from "../components/Events";

function App() {
  return (
    <div className="events">
      <Events scheduler={false} />
    </div>
  );
}

export default App;

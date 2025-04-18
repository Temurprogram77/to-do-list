import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function clickFunc() {}
  return (
    <>
      <div className="container">
        <button className="btn">Click Me</button>

        {modal ? <div>
          <div className="overlay"></div>
          <div className="modal">
            <h2>salom</h2>
          </div>
        </div> : <></>}
      </div>
    </>
  );
};

export default App;

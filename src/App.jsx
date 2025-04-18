import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  function targetFunc(e) {
    return e.target.value;
  }
  function addFunc() {
    setTasks([...tasks, task])
  }
  return (
    <>
      <div className="container">
        <button className="btn" onClick={()=>setModal(!modal)}>Click Me</button>

        {modal ? <div className="big-modal">
          <div className="overlay"></div>
          <div className="modal">
            <h2>To Do List</h2>
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder="Ma'lumot kiriting." />
            <button onClick={addFunc}>Add Task</button>
            <div className="list">
              {
                tasks.map((a,inx)=>{
                  return <p key={inx}>{a}</p>
                })
              }
            </div>
          </div>
        </div> : <></>}
      </div>
    </>
  );
};

export default App;

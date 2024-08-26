import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnterdTask] = useState('');

  function handleChange(event) {
    setEnterdTask(event.target.value);
  }

  function handleClick() {
    if(enteredTask.trim()===''){
        return;
    }
    onAdd(enteredTask);
    setEnterdTask("");
  }
  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 py-2 px-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

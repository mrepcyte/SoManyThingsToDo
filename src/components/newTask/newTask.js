import React from "react";
import TaskForm from "./taskForm";

const NewTask = (props) => {
  const saveTaskHandler = (enteredTaskData) => {
    const newTaskData = {
      ...enteredTaskData,
      id: Math.random().toString()
    };
    console.log(newTaskData);
    props.onAddTask(newTaskData);
  };

  return <TaskForm onSaveTask={saveTaskHandler} />;
};

export default NewTask;

import React from "react";
import TaskForm from "./taskForm";

const NewTask = (props) => {
  const saveItemHandler = (enteredItemData) => {
    const newItemData = {
      ...enteredItemData,
      id: Math.random().toString()
    };
    props.onAddItem(newItemData);
  };

  return <TaskForm onSaveItem={saveItemHandler} />;
};

export default NewTask;

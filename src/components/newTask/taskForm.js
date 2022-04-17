import React, { useState } from "react";
import { Form, H2, Label, Input, Textarea, Button } from "./taskFormStyles";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const enteredTaskData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(enteredDate)
    };
    // checking if the received object is empty:
    const isEmpty = Object.values(enteredTaskData).some(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      alert("you forgot to put in all information!");
      return;
    }
    props.onSaveTask(enteredTaskData);
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredDate("");
  };

  return (
    <Form>
      <H2>Add a new task:</H2>
      <div>
        <Label>what do you need to do?</Label>
        <Input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div>
        <Label>describe the task in a few words</Label>
        <Textarea
          maxlength="500"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div>
        <Label>when should this be completed?</Label>
        <Input
          type="date"
          min="2022-04-01"
          max="2032-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div>
        <Button type="submit" onClick={clickHandler}>
          add to my list
        </Button>
      </div>
    </Form>
  );
};

export default TaskForm;

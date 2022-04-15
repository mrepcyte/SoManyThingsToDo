import React from "react";
import TaskDate from "./taskDate";
import {
  TaskItemContainer,
  TaskItemHeader,
  TaskItemDescription,
  TaskItemH3,
  TaskItemDate
} from "./taskItemStyles";

const TaskItem = (props) => {
  return (
    <TaskItemContainer>
      <TaskItemHeader>
        <TaskItemH3>{props.title}</TaskItemH3>
        <TaskItemDate>
          <TaskDate date={props.date} />
        </TaskItemDate>
      </TaskItemHeader>
      <TaskItemDescription>{props.description}</TaskItemDescription>
      <button>delete</button>
    </TaskItemContainer>
  );
};

export default TaskItem;

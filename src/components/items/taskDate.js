import React from "react";
import { TaskDateComponent, DateP } from "./taskDateStyles";

export const TaskDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <TaskDateComponent>
      <DateP>task due:</DateP>
      <DateP>{month}</DateP>
      <DateP>{day}</DateP>
      <DateP>{year}</DateP>
    </TaskDateComponent>
  );
};

export default TaskDate;

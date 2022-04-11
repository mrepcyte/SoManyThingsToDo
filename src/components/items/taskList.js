import React from "react";
import TaskItem from "./taskItem";

export const TaskList = (props) => {
  return (
    <div>
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          date={task.date}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default TaskList;

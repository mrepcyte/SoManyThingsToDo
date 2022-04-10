import React from "react";
import TaskItem from "./taskItem";

export const TaskList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TaskItem
          key={item.id}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default TaskList;

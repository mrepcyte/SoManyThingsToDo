import React, { useState } from "react";
import chroma from "chroma-js";
import HeaderComponent from "./components/header";
import NewTask from "./components/newTask/newTask";
import TaskList from "./components/items/taskList";
import { GlobalStyle, PageContainer, ColorChanger, ColorInput } from "./styles";

const existingTasks = [
  {
    id: "e1",
    title: "Come up with the title for a newsletter",
    date: new Date(2022, 4, 28),
    description:
      "Need to decide on the title for the upcoming issue - maybe something related to candy?"
  },
  {
    id: "e2",
    title: "Finish my learning projects",
    date: new Date(2022, 9, 1),
    description: "Refer to Notion planning timeline and act accordingly"
  }
];

const App = () => {
  // adding an entered task to the To-Do List:

  const [tasks, setTasks] = useState(existingTasks);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  // changing the background color of the page:
  const [backgroundColor, setBackgroundColor] = useState("#fcf0f2");
  const colorChangeHandler = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div
      style={{
        background: backgroundColor,
        color: chroma(backgroundColor).luminance() < 0.3 ? "#fff" : "#000"
      }}
    >
      <GlobalStyle />
      <PageContainer>
        <ColorChanger>
          pick your color
          <ColorInput type="color" onChange={colorChangeHandler} />
        </ColorChanger>
        <HeaderComponent />
        <NewTask onAddTask={addTaskHandler} />
        <TaskList items={tasks} />
      </PageContainer>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import HeaderComponent from "./components/header";
import NewTask from "./components/newTask/newTask";
import TaskList from "./components/items/taskList";
import { GlobalStyle, PageContainer } from "./styles";

const existingTasks = [
  {
    id: "e1",
    title: "Come up with the title for a newsletter",
    date: new Date(2022, 4, 28),
    description: "I need to decide on the new title"
  },
  {
    id: "e2",
    title: "Learn React",
    date: new Date(2022, 6, 1),
    description: "Learn everything"
  }
];

const App = () => {
  const [items, setItems] = useState(existingTasks);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div>
      <GlobalStyle />
      <PageContainer>
        <HeaderComponent />
        <NewTask onAddItem={addItemHandler} />
        <TaskList items={items} />
      </PageContainer>
    </div>
  );
};

export default App;

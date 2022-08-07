import "./App.css";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";
import React, { useState, useEffect } from "react";
import { Heading, VStack } from "@chakra-ui/react";

function App() {
  const initialTodos = [
    {
      id: 1,
      name: "Hello Developer",
    },
    {
      id: 2,
      name: "Welcome to React",
    },
  ];

  const [todos, setTodo] = useState(() => JSON.parse(localStorage.getItem('todo')) || []);

  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todos))
  })

  function DeleteTodo(id) {
    const newTodo = todos.filter((item) => {
      return item.id != id;
    });
    setTodo(newTodo);
  }

  function AddTodo(todo) {
    setTodo([todo, ...todos]);
  }
  return (
    <React.Fragment>
      <VStack>
        <Heading
          size={"lg"}
          m="5"
          bgGradient="linear(to-r, green.200, pink.500)"
          bgClip={"text"}
        >
          TODO APP BY KAZMI
        </Heading>
        <TodoAdd AddTodo={AddTodo} />
        <TodoList todos={todos} DeleteTodo={DeleteTodo} />
      </VStack>
    </React.Fragment>
  );
}

export default App;

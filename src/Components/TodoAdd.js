import React from "react";
import { Input, HStack, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";
const TodoAdd = ({ AddTodo }) => {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    if (!data) {
      toast({
        position: "bottom-right",
        title: "Input Field Is Empty.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      name: data,
    };
    AddTodo(todo);
    setData("");
  }

  const [data, setData] = useState([]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            placeholder="Enter Todo"
            variant={"filled"}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button type="submit" px={"8"}>
            ADD
          </Button>
        </HStack>
      </form>
    </React.Fragment>
  );
};

export default TodoAdd;

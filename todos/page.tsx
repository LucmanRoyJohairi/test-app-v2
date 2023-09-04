import TodoCard from "@/components/TodoCard";
import axios from "axios";
import React, { useState } from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

const Page = async () => {
  const todos: Todo[] = await getTodos();

  {
    todos.map((todo, index) => {
      return <TodoCard key={index} todo={todo} />;
    });
  }
};

export default Page;

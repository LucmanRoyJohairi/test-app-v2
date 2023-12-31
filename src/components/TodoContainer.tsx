"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";
import { Todo } from "@/types/types";

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          // "https://jsonplaceholder.typicode.com/todos"
          "http://206.189.147.71:10100/api/projects"
        );
        setTodos(res.data.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoCard key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;

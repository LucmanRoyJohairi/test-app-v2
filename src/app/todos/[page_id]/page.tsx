"use client";
import axios from "axios";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Todo } from "@/types/types";

type SingleTodoProps = {
  params: { page_id: number };
};

type TodoProps = {
  data?: Todo;
};

const SingleTodo = ({ params }: SingleTodoProps) => {
  const [todo, setTodo] = useState<TodoProps>();

  const { page_id } = params;
  const isString = !/^\d+$/.test(page_id.toString());

  useEffect(() => {
    async function getTodo(page_id: number) {
      // Fetch data from your API here.
      const res = await axios.get(
        `http://206.189.147.71:10100/api/projects/${page_id}`
      );
      setTodo(res.data);
      // return res.data;
    }
    getTodo(page_id);
  }, [page_id]);

  if (isString) {
    return notFound();
  }
  // const project = await getProjects(page_id);
  // if (!todo.data) {
  //   return notFound();
  // }
  return (
    <div className="m-5 border p-5">
      <div className="mb-2">todo Info</div>
      <div>title: {todo?.data?.title}</div>
      <div>staus: {todo?.data?.status}</div>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await axios.get(`http://206.189.147.71:10100/api/projects`);
  const todos = await res.data;
  return todos.data.map((p: Todo) => ({ page_id: p.id.toString() }));
}

export default SingleTodo;

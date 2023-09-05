import { Todo } from "@/types/types";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import React from "react";

// export const dynamic = "force-dynamic";

type ProjectDetailsProps = {
  params: { page_id: number };
};

type TodoProps = {
  data?: Todo | null;
};

// export const dynamicParams = false;

async function getProjects(page_id: number): Promise<TodoProps> {
  // Fetch data from your API here.
  const res = await axios.get(
    `http://206.189.147.71:10100/api/projects/${page_id}`
  );
  return res.data;
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { page_id } = params;
  const isString = !/^\d+$/.test(page_id.toString());
  if (isString) {
    return notFound();
  }
  const project = await getProjects(page_id);
  if (!project.data) {
    return notFound();
  }
  return (
    <div className="m-5 border p-5">
      <div className="mb-2">Project Info</div>
      <div>title: {project.data.title}</div>
      <div>staus: {project.data.status}</div>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await axios.get(`http://206.189.147.71:10100/api/projects`);
  const todos = await res.data;
  return todos.data.map((p: Todo) => ({ page_id: p.id.toString() }));
}

export default ProjectDetails;

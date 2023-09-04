// export type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

type Closed = "N" | "Y";
type Status = "delayed" | "warning" | "almost" | "on-time";
export type Todo = {
  id: number;
  title: string;
  cpi: number;
  spi: number;
  date_start: string;
  closed: Closed;
  status: Status;
  project_cost: number;
  total_estimate: number;
  total_actual: number;
  cv: number;
  tasks: Tasks[];
};

export type Tasks = {
  id: string;
  task_name: string;
  created_by: string;
  assigned_to: string;
  estimated: number;
  actual: number;
  tag: string;
};

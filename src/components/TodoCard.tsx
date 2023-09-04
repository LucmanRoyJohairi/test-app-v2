import { Todo } from "@/types/types";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div className="border m-5 p-5">
      <div>{todo.title}</div>
    </div>
  );
};

export default TodoCard;

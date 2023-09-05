import { Todo } from "@/types/types";
import { useRouter } from "next/navigation";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  const router = useRouter();
  return (
    <div className="border m-5 p-5">
      <div>{todo.title}</div>
      <button
        onClick={() => {
          router.push(`/todos/${todo.id}`);
        }}
      >
        click
      </button>
    </div>
  );
};

export default TodoCard;

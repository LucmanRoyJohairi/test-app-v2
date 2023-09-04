type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  return <div>{todo.title}</div>;
};

export default TodoCard;

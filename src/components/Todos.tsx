import Todo from "../models/todo";
import TodosItem from "./TodosItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodosItem key={item.id} text={item.text}></TodosItem>
			))}
		</ul>
	);
};

export default Todos;

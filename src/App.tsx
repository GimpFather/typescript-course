import NewTodos from "./components/NewTodos";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const todos = [new Todo("Learn React"), new Todo("Learn TS")];
	const addTodoHandler = (todoText: string) => {};
	return (
		<div className="App">
			<NewTodos onAddTodo={addTodoHandler}></NewTodos>
			<Todos items={todos}></Todos>
		</div>
	);
}

export default App;

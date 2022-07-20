import React from "react";
import { useRef } from "react";

const NewTodos: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = todoTextInputRef.current!.value;
		if (enteredText.trim().length === 0) {
			return;
		}
		props.onAddTodo(enteredText);
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text"> Todo text: </label>
			<input id="text" type="text" ref={todoTextInputRef} />
			<button>Add todo</button>
		</form>
	);
};
export default NewTodos;

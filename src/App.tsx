import { useState } from "react";
import "./components/css/App.css";

import { User } from "./utilities/models/types";
import { IAddUserHandler } from "./utilities/models/interfaces";

import AddUser from "./components/tsx/Users/AddUser";
import UsersList from "./components/tsx/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState<User[]>([]);

	const addUserHandler = ({ userName, userAge }: IAddUserHandler) => {
		setUsersList((prevState: User[]) => {
			return [
				...prevState,
				{ name: userName, age: userAge, id: Math.random() },
			];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={usersList}></UsersList>
		</div>
	);
}

export default App;

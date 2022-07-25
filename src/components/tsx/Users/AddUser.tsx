import React, { useState } from "react";

import validateByLength from "../../../utilities/validateByLength";
import { IAddUserHandler } from "../../../utilities/models/interfaces";
import { User } from "../../../utilities/models/types";

import Card from "../UI/Card";
import Button from "../UI/Button";

interface IAddUser {
	onAddUser: ({ userName, userAge }: IAddUserHandler) => void;
}

const AddUser = ({ onAddUser }: IAddUser) => {
	const [enteredUserName, setEnteredUserName] = useState<string>("");
	const [enteredAge, setEnteredAge] = useState<number>(0);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			validateByLength({ valueToValidate: enteredUserName }) ||
			validateByLength({ valueToValidate: enteredAge })
		)
			return;
		if (enteredAge < 1) {
			return;
		}
		onAddUser({ userName: enteredUserName, userAge: enteredAge });
		setEnteredAge(0);
		setEnteredUserName("");
	};

	const usernameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setEnteredUserName(event.currentTarget.value);
	};

	const ageChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setEnteredAge(event.currentTarget.valueAsNumber);
	};

	return (
		<Card className="input">
			<form onSubmit={submitHandler}>
				<label htmlFor="username-input">Username</label>
				<input
					id="username-input"
					type="text"
					value={enteredUserName}
					onChange={usernameChangeHandler}
				></input>
				<label htmlFor="age-input">Age (in years)</label>
				<input
					id="age-input"
					type="number"
					value={enteredAge}
					onChange={ageChangeHandler}
				></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;

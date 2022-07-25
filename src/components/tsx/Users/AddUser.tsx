import React, { useState } from "react";

import validateByLength from "../../../utilities/functions/validateByLength";
import { IAddUserHandler } from "../../../utilities/models/interfaces";
import { SErrorModal } from "../../../utilities/models/types";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

interface IAddUser {
	onAddUser: ({ userName, userAge }: IAddUserHandler) => void;
}

const AddUser = ({ onAddUser }: IAddUser) => {
	const [enteredUserName, setEnteredUserName] = useState<string>("");
	const [enteredAge, setEnteredAge] = useState<number>(0);
	const [error, setError] = useState<SErrorModal>();

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			validateByLength({ valueToValidate: enteredUserName }) ||
			validateByLength({ valueToValidate: enteredAge })
		) {
			setError({
				title: "Invalid input!",
				message: "Please enter a valid name and age!",
				isError: true,
			});
		}
		if (enteredAge < 1) {
			setError({
				title: "Invalid age!",
				message: "Please enter a valid age!",
				isError: true,
			});
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

	const errorHandler = () => {
		setError({
			title: "Invalid age!",
			message: "Please enter a valid age!",
			isError: false,
		});
	};

	return (
		<>
			{error?.isError && (
				<ErrorModal
					title={error!.title}
					message={error!.message}
					errorHandler={errorHandler}
				></ErrorModal>
			)}
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
		</>
	);
};

export default AddUser;

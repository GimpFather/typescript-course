import React from "react";
import Card from "./Card";
import Button from "./Button";

interface IErrorModal {
	title: string;
	message: string;
	errorHandler: () => void;
}

const ErrorModal = ({ title, message, errorHandler }: IErrorModal) => {
	return (
		<>
			<div className="backdrop" onClick={errorHandler}></div>
			<Card className="modal">
				<header className="header">
					<h2>{title}</h2>
				</header>
				<div className="content">
					<p>{message}</p>
				</div>
				<footer className="actions">
					<Button type="submit" onClick={errorHandler}>
						Close
					</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;

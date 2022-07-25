import React, { MouseEventHandler } from "react";

interface IAddUser {
	children: React.ReactNode;
	type: "button" | "submit" | "reset" | undefined;
	onClick?: React.MouseEventHandler;
}

const Button = ({ children, type, onClick }: IAddUser) => {
	return (
		<button className="button" type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

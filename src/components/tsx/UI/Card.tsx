import React from "react";

interface ICard {
	children: React.ReactNode;
	className: string;
}

const Card = (props: ICard) => {
	return <div className={`${props.className} card`}>{props.children}</div>;
};

export default Card;

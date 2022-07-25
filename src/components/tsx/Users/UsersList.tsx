import React from "react";
import { User } from "../../../utilities/models/types";
import Card from "../UI/Card";

interface IUsersList {
	users: User[];
}

const UsersList = ({ users }: IUsersList) => {
	return (
		<Card className="users">
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age})
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;

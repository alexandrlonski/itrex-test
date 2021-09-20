import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const TableBody: FC = () => {
	const { users } = useTypedSelector((state) => state.user);

	return (
		<div className="table-body">
			{users.map((user) => {
				const { id, firstName, lastName, email, phone, adress } = user;
				return (
					<ul key={phone} className="table-row">
						<li className="table-item">{id}</li>
						<li className="table-item">{firstName}</li>
						<li className="table-item">{lastName}</li>
						<li className="table-item">{email}</li>
						<li className="table-item">{phone}</li>
						<li className="table-item">{adress.state}</li>
					</ul>
				);
			})}
		</div>
	);
};

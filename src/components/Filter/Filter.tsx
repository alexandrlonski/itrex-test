import { FC } from "react";
import { Button } from "./Button";
import { List } from "./List";
import "./style.scss";

export const Filter: FC = () => {
	return (
		<div className="filter">
			<Button />
			<List />
		</div>
	);
};

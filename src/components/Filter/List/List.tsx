import { FC } from "react";

export const List: FC = () => {
	const list = ["WI", "TN", "FL", "NE"];

	return (
		<ul className="filter-list ">
			{list.map((el) => (
				<li key={el} className="filter-list__item">
					{el}
				</li>
			))}
		</ul>
	);
};

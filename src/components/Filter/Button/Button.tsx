import { FC } from "react";

export const Button: FC = () => {
	return (
		<button className="filter-btn">
			Filter by state
			<span className="filter-btn__icon"></span>
		</button>
	);
};

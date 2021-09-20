import { FC } from "react";

import "./style.scss";

export const Search: FC = () => {
	return <input className="search" type="text" placeholder="search by name" />;
};

import { FC } from "react";

import "./style.scss";

export const UserInfo: FC = () => {
	return (
		<div className="userInfo">
			<h2>Profile-info:</h2>
			<ul className="userInfo-block">
				<li className="userInfo-row">Selected profile: name</li>
				<li className="userInfo-row">Descriptoin: Lorem, ipsum dolor.</li>
				<li className="userInfo-row">Address: 71 Grushevka st</li>
				<li className="userInfo-row">City: Minsk</li>
				<li className="userInfo-row">State: WI</li>
				<li className="userInfo-row">Index: 654</li>
			</ul>
		</div>
	);
};

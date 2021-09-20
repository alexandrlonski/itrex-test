import { FC } from "react";

import "./style.scss";

export const Pagination: FC = () => {
	const pages = [1, 2, 3, 4, 5];

	return (
		<div className="pagination">
			<a href="/" className="prev page disabled">
				Previous
			</a>
			{pages.map((page) => {
				return (
					<a
						key={page}
						href="/"
						className={`page ${page === 1 ? "active" : ""}`}
					>
						{page}
					</a>
				);
			})}
			<a href="/" className="next page">
				Next
			</a>
		</div>
	);
};

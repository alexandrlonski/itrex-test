import "./style.scss";
import { FC, useEffect } from "react";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import { UserInfo } from "../components/UserInfo/UserInfo";
import UserTable from "../components/UserTable/UserTable";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";

const Main: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<main className="main">
			<div className="container">
				<nav className="nav">
					<Search />
					<Filter />
				</nav>
				<UserTable />
				<Pagination />
				<UserInfo />
			</div>
		</main>
	);
};

export default Main;

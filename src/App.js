import "./App.css";
import Main from "./Main";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import Dropdowns from "./Dropdowns";
import Limit from "./Limit";

function App() {
	const [appState, setAppState] = useState({
		loading: false,
		data: [],
	});

	const [dropDown, changeDropDown] = useState("MUMBAI");
	const [apiUrl, setUrl] = useState(
		"https://fyle-bank-app-gunjan-backend.herokuapp.com/api/branches?q=MUMBAI&limit=100&offset=0"
	);
	const [showPerPage, setShowPerPage] = useState(10);
	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage,
	});
	const [limit, changeLimit] = useState(10);
	const fetchData = () => {
		setAppState({ loading: true });
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				setAppState({ loading: false, data: data });
			});
	};
	const [term, setTerm] = useState("");
	const onDropDownChange = (value) => {
		if (value !== dropDown) {
			changeDropDown(value);
			setShowPerPage(limit);
		}
	};
	const onLimitChange = (value) => {
		if (value !== limit) {
			changeLimit(value);
		}
	};
	console.log(showPerPage);
	useEffect(() => {
		setUrl(
			"https://fyle-bank-app-gunjan-backend.herokuapp.com/api/branches?q=" +
				dropDown +
				"&limit=" +
				"100000" +
				"&offset=0"
		);
		fetchData();
	}, [dropDown]);
	useEffect(() => {
		setShowPerPage(limit);
	}, [limit]);

	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};
	const onSearchChange = (term) => {
		setTerm(term);
	};
	if (appState.loading === true) {
		return <p>Please wait</p>;
	}

	return (
		<div className="App">
			<div className="header">
				<Dropdowns onDropDownChange={onDropDownChange} />

				<Search onSearchChange={onSearchChange} />
				<Limit onLimitChange={onLimitChange} />
			</div>
			<Main data={appState.data} pagination={pagination} term={term} />
			<Pagination
				showPerPage={showPerPage}
				onPaginationChange={onPaginationChange}
				total={appState.data.length}
			/>
		</div>
	);
}

export default App;

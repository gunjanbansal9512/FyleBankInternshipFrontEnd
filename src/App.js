import "./App.css";
import Main from "./Main";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";

function App() {
	const [appState, setAppState] = useState({
		loading: false,
		data: [],
	});
	const [showPerPage, setShowPerPage] = useState(10);
	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage,
	});
	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:5000/api/branches`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				setAppState({ loading: false, data: data });
			});
	}, [setAppState]);
	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};
	if (appState.loading === true) {
		return <p>Please wait</p>;
	}

	return (
		<div className="App">
			<Main data={appState.data} pagination={pagination} />
			<Pagination
				showPerPage={showPerPage}
				onPaginationChange={onPaginationChange}
				total={appState.data.length}
			/>
		</div>
	);
}

export default App;

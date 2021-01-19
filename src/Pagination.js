import React, { useState, useEffect } from "react";

function Pagination({ showPerPage, onPaginationChange, total }) {
	const [counter, setCounter] = useState(1);
	const [numberOfButtons, setNumberOfButtons] = useState(
		Math.ceil(total / showPerPage)
	);
	console.log(showPerPage);
	useEffect(() => {
		const value = showPerPage * counter;

		onPaginationChange(value - showPerPage, value);
	}, [counter]);
	useEffect(() => {
		const value = showPerPage * counter;

		onPaginationChange(value - showPerPage, value);
	}, [showPerPage]);
	const onButtonClick = (type) => {
		if (type === "prev") {
			if (counter === 1) {
				setCounter(1);
			} else {
				setCounter(counter - 1);
			}
		} else if (type === "next") {
			if (numberOfButtons === counter) {
				setCounter(counter);
			} else {
				setCounter(counter + 1);
			}
		}
	};
	return (
		<div className="d-flex justify-content-between">
			<button className="btn  btn-dark" onClick={() => onButtonClick("prev")}>
				Prev
			</button>
			<button className="btn  btn-dark" onClick={() => onButtonClick("next")}>
				Next
			</button>
		</div>
	);
}

export default Pagination;

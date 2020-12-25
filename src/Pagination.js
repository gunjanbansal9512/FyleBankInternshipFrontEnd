import React, { useState, useEffect } from "react";

function Pagination({ showPerPage, onPaginationChange, total }) {
	const [counter, setCounter] = useState(1);
	const [numberOfButtons, setNumberOfButtons] = useState(
		Math.ceil(total / showPerPage)
	);
	useEffect(() => {
		const value = showPerPage * counter;

		onPaginationChange(value - showPerPage, value);
	}, [counter]);
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
		<div className="d-flex justify-content-center">
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item">
						<span
							className="page-link"
							aria-label="Previous"
							onClick={() => onButtonClick("prev")}
						>
							<span aria-hidden="true">&laquo;</span>
							<span className="sr-only">Previous</span>
						</span>
					</li>
					{new Array(numberOfButtons).fill("").map((el, index) => (
						<li
							className={`page-item ${index + 1 === counter ? "active" : null}`}
						>
							<span className="page-link" onClick={() => setCounter(index + 1)}>
								{index + 1}
							</span>
						</li>
					))}
					;
					<li className="page-item">
						<span
							className="page-link"
							aria-label="Next"
							onClick={() => onButtonClick("next")}
						>
							<span aria-hidden="true">&raquo;</span>
							<span className="sr-only">Next</span>
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Pagination;

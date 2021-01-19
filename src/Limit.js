import React, { useState, useEffect } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";
function Limit({ onLimitChange }) {
	const [item, selectItem] = useState(10);
	const changeItem = (event) => {
		//	console.log("changed", event);
		selectItem(event);
	};
	useEffect(() => {
		// onDropDownChange(item);
		onLimitChange(item);
	}, [item]);
	return (
		<div class="dropdown">
			<DropdownButton
				alignRight
				title="Item Per Page"
				id="dropdown-menu-align-right"
				onSelect={changeItem}
			>
				<Dropdown.Item eventKey="5">5</Dropdown.Item>
				<Dropdown.Item eventKey="10">10</Dropdown.Item>
				<Dropdown.Item eventKey="20">20</Dropdown.Item>
				<Dropdown.Item eventKey="30">30</Dropdown.Item>
				<Dropdown.Item eventKey="40">40</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}

export default Limit;

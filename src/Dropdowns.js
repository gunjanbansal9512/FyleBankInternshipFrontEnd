import React from "react";
import { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
function Dropdowns({ onDropDownChange }) {
	const [item, selectItem] = useState("Mumbai");
	const changeItem = (event) => {
		//	console.log("changed", event);
		selectItem(event);
	};
	useEffect(() => {
		onDropDownChange(item);
	}, [item]);
	return (
		<div>
			<DropdownButton
				alignRight
				title="City"
				id="dropdown-menu-align-right"
				onSelect={changeItem}
			>
				<Dropdown.Item eventKey="BANGALURU">Bangaluru</Dropdown.Item>
				<Dropdown.Item eventKey="MUMBAI">Mumbai</Dropdown.Item>
				<Dropdown.Item eventKey="CHENNAI">Chennai</Dropdown.Item>
				<Dropdown.Item eventKey="AMRITSAR">Amristar</Dropdown.Item>
				<Dropdown.Item eventKey="PATINA">Patina</Dropdown.Item>
			</DropdownButton>
		</div>
	);
}

export default Dropdowns;

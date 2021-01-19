import { React, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
function Search({ onSearchChange }) {
	const [search, setSearch] = useState("");
	//	console.log(search);
	return (
		<div
			className="d-flex justify-content-center"
			onChange={(event) => {
				setSearch(event.target.value);
				onSearchChange(search);
			}}
		>
			<InputGroup>
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon2"
				/>
			</InputGroup>
		</div>
	);
}

export default Search;

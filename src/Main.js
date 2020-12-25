import { React, useState } from "react";
import { Dropdown, InputGroup, FormControl, Table } from "react-bootstrap";

function Main(props) {
	const { data } = props;

	const { pagination } = props;

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Select City
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Bangalore</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Chennai</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
					<Dropdown.Item href="#/action-4">Pune</Dropdown.Item>
					<Dropdown.Item href="#/action-5">Hyderabad</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<InputGroup>
				<FormControl
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon2"
				/>
			</InputGroup>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Bank Name</th>
						<th>Branch Name</th>
						<th>City</th>
					</tr>
				</thead>

				{data.slice(pagination.start, pagination.end).map((bank) => {
					return (
						<tbody block key={bank.id}>
							<tr>
								<td>{bank.id}</td>
								<td>{bank.name}</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</div>
	);
}

export default Main;

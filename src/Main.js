import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Fav from "./Fav";

function Main(props) {
	const { data } = props;
	const { pagination } = props;
	const { term } = props;
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Bank Name</th>
						<th>IFSC</th>
						<th>City</th>
						<th>Mark as favourite</th>
					</tr>
				</thead>

				{data
					.filter((data) => data.name.includes(term.toUpperCase()))
					.slice(pagination.start, pagination.end)
					.map((bank, index) => {
						return (
							<tbody key={bank.ifsc}>
								<tr>
									<td>{index + 1}</td>
									<td>{bank.name}</td>
									<td>{bank.ifsc}</td>
									<td>{bank.city}</td>
									<td>
										<Fav ifsc={bank.ifsc} />
									</td>
								</tr>
							</tbody>
						);
					})}
			</Table>
		</div>
	);
}

export default Main;

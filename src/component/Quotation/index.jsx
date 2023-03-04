import { useNavigate } from "react-router-dom";

import './styles.css';

const Quotation = () => {
	const navigate = useNavigate();
	const data = [
		{ vName: "Sedan", cName: "Swift Dzire, Accent, Tata Zest", rate: "Rs.12/KM" },
		{ vName: "Premium Luxury", cName: "Toyota Altis, Toyota Etios, Honda Amaze, Honda City", rate: "Rs.14/KM" },
		{ vName: "SUV", cName: "Maruti Ertiga, Renault Triber, Mahindra Xylo, Chevrolet Enjoy", rate: "Rs.15/KM" },
		{ vName: "Premium SUV", cName: "Toyota Ennova, Mahindar Marazzo", rate: "Rs.17/KM" },
		{ vName: "Premium SUV", cName: "Toyota Ennova Crysta", rate: "Rs.20/KM" },
		{ vName: "BUS", cName: "17 To 60 Seater", rate: "On Call" },
	];

	const handleBook = () => {
		navigate("/booking");
	}

	return (
		<div className="tblclass">
			<table>
				<tr>
					<th>Vehicle Name</th>
					<th>Car Name</th>
					<th>Rate</th>
					<th>Book Now</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.vName}</td>
							<td>{val.cName}</td>
							<td>{val.rate}</td>
							<td><button onClick={handleBook}>Book Now</button> </td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}

export default Quotation;
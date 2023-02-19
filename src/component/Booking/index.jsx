import { useState, useContext, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { Sedan, Suv, Luxury } from '../../utils/constant';
import { UserConsumer } from '../../contextProvider';

import './style.css';

const Booking = () => {
	const form = useRef();
	const consumerContext = useContext(UserConsumer);
	const [vahicleCategory, setVahicleCategory] = useState();
	const [vechicleType, setVechicleType] = useState();
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async (e) => {
			await sleep(300)
			const daat = form;
			consumerContext.handleEmailSend(form.current);
	}

	const handleRadioCategoryClick = (e) => {
		const value = e.target.value;
	}
	const handleRadioClick = (e) => {
		const value = e.target.value;
		let arr = Sedan;
		if (value === "SUV") arr = Suv;
		else if (value === "Luxury") arr = Luxury;

		const data = arr.map((ele, index) => {
			return (
				<>
					<label className='radio-css' key={index}>
						<Field
							className="margin-css"
							name="vehicle"
							component="input"
							type="radio"
							value={ele}
							onClick={handleRadioCategoryClick}
							required="true"
						/>
						{ele}
					</label>
				</>
			)
		});
		setVahicleCategory(data);
		setVechicleType(value);
	}

	return (
		<div className='booking-class'>
			<h1>Booking</h1>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, submitting, pristine, values }) => (
					<form ref={form} onSubmit={handleSubmit}>
						<div>
							<label className='comm-label'>Type of booking</label>
							<Field name="typeOfBooking" component="select" required="true">
								<option >Select Booking Type</option>
								<option value="Outstation">Outstation</option>
								<option value="Oneway drop">Oneway drop</option>
								<option value="Airport transfer">Airport transfer</option>
							</Field>
						</div>
						<div>
							<label className='comm-label'>Select vehicle</label>
							<div>
								<label className='radio-css'>
									<Field
										name="vehiclecategory"
										component="input"
										type="radio"
										value="Sedan"
										onClick={handleRadioClick}
										className="margin-css"
										required="true"
									/>
									Sedan
								</label>
								<label className='radio-css'>
									<Field
										name="vehiclecategory"
										component="input"
										type="radio"
										value="SUV"
										onClick={handleRadioClick}
										className="margin-css"
										required="true"
									/>
									SUV
								</label>
								<label className='radio-css'>
									<Field
										name="vehiclecategory"
										component="input"
										type="radio"
										value="Luxury"
										onClick={handleRadioClick}
										className="margin-css"
										required="true"
										/>
									Luxury
								</label>
							</div>
						</div>
						<div>
							<label className='comm-label'>Select Category</label>
							<div>
								{vahicleCategory}
							</div>
						</div>
						<div>
							<label className='comm-label'>Journey date</label>
							<Field name="journeydate" 
							component="input" 
							type="date"
							required= "true"
							 />
						</div>
						<div>
							<label className='comm-label'>Pick up location</label>
							<Field
								name="pickup"
								component="input"
								type="text"
								placeholder="Pick up location"
								required= "true"
							/>
							<label className='comm-label'>Drop location</label>
							<Field
								name="drop"
								component="input"
								type="text"
								placeholder="Drop location"
								required= "true"
							/>

						</div>
						<div>
							<label className='comm-label'>Name</label>
							<Field
								name="username"
								component="input"
								type="text"
								placeholder="Name"
								required= "true"
							/>
						</div>
						<div>
							<label className='comm-label'>Contact number</label>
							<Field
								name="contact"
								component="input"
								type="text"
								placeholder="contact"
								required= "true"
							/>
						</div>
						<div>
							<label className='comm-label'>Email Id</label>
							<Field
								type="email"
								name="to_email"
								component="input"
								placeholder="example@gmail.com"
							/>
						</div>
						<div className="buttons">
							<button className='btn-submit' type="submit" disabled={submitting || pristine}>
								Submit
							</button>
							<button
								className='btn-reset'
								type="button"
								onClick={form.reset}
								disabled={submitting || pristine}
							>
								Reset
							</button>
						</div>
					</form>
				)}
			/>
		</div>
	)
}

export default Booking;
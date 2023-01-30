import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Sedan, Suv, Luxury } from '../../utils/constant';
import './style.css';

const Booking = () => {
	const [vahicleCategory, setVahicleCategory] = useState();
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async values => {
		await sleep(300)
		window.alert(JSON.stringify(values, 0, 2))
	}

	const handleRadioCategoryClick = (e) => {
		const value = e.target.value;
		console.log('value ::::', value)
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
							name={ele}
							component="input"
							type="radio"
							value={ele}
							onClick={handleRadioCategoryClick}
						/>
						{ele}
					</label>
				</>
			)
		});
		setVahicleCategory(data);
	}

	return (
		<div className='booking-class'>
			<h1>Booking</h1>
			<Form
				onSubmit={onSubmit}
				initialValues={{ stooge: 'larry', employed: false }}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label className='comm-label'>Type of booking</label>
							<Field name="typeOfBooking" component="select">
								<option disabled>Select Booking Type</option>
								<option value="Outstation">Outstation</option>
								<option value="Oneway drop">Oneway drop</option>
								<option value="Airport transfer">Airport transfer</option>
							</Field>
						</div>
						<div>
							<label className='comm-label'>Select vehical</label>
							<div>
								<label className='radio-css'>
									<Field
										name="stooge"
										component="input"
										type="radio"
										value="Sedan"
										onClick={handleRadioClick}
										className="margin-css"
									/>
									Sedan
								</label>
								<label className='radio-css'>
									<Field
										name="stooge"
										component="input"
										type="radio"
										value="SUV"
										onClick={handleRadioClick}
										className="margin-css"
									/>
									SUV
								</label>
								<label className='radio-css'>
									<Field
										name="stooge"
										component="input"
										type="radio"
										value="Luxury"
										onClick={handleRadioClick}
										className="margin-css"
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
							<Field name="journeydate" component="input" type="date" />
						</div>
						<div>
							<label className='comm-label'>Pick up</label>
							<Field
								name="pickup"
								component="input"
								type="text"
								placeholder="Pick up"
							/>
							<label className='comm-label'>Drop location</label>
							<Field
								name="droplocation"
								component="input"
								type="text"
								placeholder="Drop location"
							/>

						</div>
						<div>
							<label className='comm-label'>User Name</label>
							<Field
								name="userName"
								component="input"
								type="text"
								placeholder="User Name"
							/>
						</div>
						<div>
							<label className='comm-label'>Contact number</label>
							<Field
								name="contactNumber"
								component="input"
								type="text"
								placeholder="contact"
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
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)}
			/>
			)
		</div>
	)
}

export default Booking;
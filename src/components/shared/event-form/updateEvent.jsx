import { useState } from 'react';
import classes from '../clock-form/clock-form.module.css';

/* eslint-disable react/prop-types */
const UpdateEvent = ({
	event = { clockId: '', id: '', title: '', time: '' },
}) => {
	const [eventValues, setEventValues] = useState({ ...event });

	const handleChange = (e) => {
		let { name, value } = e.target;

		setEventValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.form_group}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={eventValues.title}
					onChange={handleChange}
					required
				/>
			</div>
			<div className={classes.form_group}>
				<label htmlFor="time">Time</label>
				<input
					type="time"
					name="time"
					id="time"
					value={eventValues.time}
					onChange={handleChange}
				/>
			</div>

			<button type="submit" className="btn btn-create">
				Update Event
			</button>
		</form>
	);
};
export default UpdateEvent;

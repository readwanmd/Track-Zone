import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from '../clock-form/clock-form.module.css';

/* eslint-disable react/prop-types */
const EventForm = ({
	clockId,
	event = { clockId: '', id: '', title: '', time: '' },
	addEvent,
	createEventModal,
}) => {
	const [eventValues, setEventValues] = useState({ ...event });

	const handleChange = (e) => {
		let { name, value } = e.target;

		setEventValues((prev) => ({
			...prev,
			clockId,
			id: uuidv4(),
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addEvent(eventValues);
		createEventModal();
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
				Add Event
			</button>
		</form>
	);
};
export default EventForm;

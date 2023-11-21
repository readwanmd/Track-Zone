/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timeZone';
import { getOffset, getTimeZone } from '../../../utils/timeZone';
import classes from './clock-form.module.css';

const ClockForm = ({
	values = { title: '', timeZone: 'GMT', offset: 0, time: '' },
	handleClock,
	title = true,
	edit = false,
	modal,
}) => {
	const [formValues, setFormValues] = useState(values);

	useEffect(() => {
		if (TIMEZONE_OFFSET[formValues.timeZone]) {
			setFormValues((prev) => ({
				...prev,
				offset: TIMEZONE_OFFSET[formValues.timeZone],
			}));
		}
	}, [formValues.timeZone]);

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === 'offset') {
			value = Number(value) * 60;
		}

		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClock(formValues);
		modal();
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.form_group}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={formValues.title}
					onChange={handleChange}
					disabled={!title}
				/>
			</div>
			<div className={classes.form_group}>
				<label htmlFor="timeZone">Timezone</label>

				<select
					name="timeZone"
					id="timeZone"
					value={formValues.timeZone}
					onChange={handleChange}
				>
					{getTimeZone().map((timeZone) => (
						<option key={timeZone} value={timeZone}>
							{timeZone}
						</option>
					))}
				</select>
			</div>

			{(formValues.timeZone === 'GMT' || formValues.timeZone === 'UTC') && (
				<div className={classes.form_group}>
					<label htmlFor="offset">Offset</label>
					<select
						name="offset"
						id="offset"
						value={formValues.offset / 60}
						onChange={handleChange}
					>
						{getOffset().map((offset) => (
							<option key={offset} value={offset}>
								{offset > 0 ? `+${offset}` : offset}
							</option>
						))}
					</select>
				</div>
			)}

			<button
				type="submit"
				className={`btn ${edit ? 'btn-update' : 'btn-create'}`}
			>
				{edit ? 'Update' : 'Create'}
			</button>
		</form>
	);
};
export default ClockForm;

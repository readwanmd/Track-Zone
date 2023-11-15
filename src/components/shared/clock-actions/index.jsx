import { useState } from 'react';
import ClockForm from '../clock-form';
/* eslint-disable react/prop-types */

const ClockActions = ({ local = false, clock, updateClock }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const handleClock = (values) => {
		console.log(values);
	};

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? (
				<button onClick={() => setIsCreate(!isCreate)}>Create</button>
			) : (
				<button>Delete</button>
			)}

			{isEdit && (
				<>
					<h3>Edit</h3>
					<ClockForm
						values={clock}
						handleClock={updateClock}
						title={!local}
						edit={true}
					/>
				</>
			)}
			{isCreate && (
				<>
					<h3>Create Clock</h3>
					<ClockForm handleClock={handleClock} />
				</>
			)}
		</div>
	);
};

export default ClockActions;

{
	/* <div>
	<input
		type="text"
		value={clock.title}
		name="title"
		onChange={handleChange}
	/>
	<select
		name="timeZone"
		value={clock.timeZone}
		onChange={handleChange}
	>
		<option value="GMT">GMT</option>
		<option value="UTC">UTC</option>
		<option value="PST">PST</option>
		<option value="EST">EST</option>
		<option value="BST">BST</option>
		<option value="MST">MST</option>
	</select>

	{(clock.timeZone === 'GMT' || clock.timeZone === 'UTC') && (
		<select
			name="offset"
			value={clock.offset / 60}
			onChange={handleChange}
		>
			{defaultOffset.map((offset) => (
				<option key={offset} value={offset}>
					{offset}
				</option>
			))}
		</select>
	)}
</div> */
}

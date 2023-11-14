import { useState } from 'react';

/* eslint-disable react/prop-types */

const defaultOffset = [
	-10.5, -11, -11.5, -10, -9.5, -9, -8.5, 8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock }) => {
	const [isEdit, setIsEdit] = useState(false);

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === 'offset') {
			value = Number(value) * 60;
		}

		updateClock({
			[name]: value,
		});
	};

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? <button>Create</button> : <button>Delete</button>}

			{isEdit && (
				<div>
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
				</div>
			)}
		</div>
	);
};

export default ClockActions;

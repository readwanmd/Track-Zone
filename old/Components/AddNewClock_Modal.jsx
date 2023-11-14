import Modal from './Modal';

/* eslint-disable react/prop-types */
const AddNewClock_Modal = ({ open, onClose, handleChange, handleSubmit }) => {
	return (
		<>
			<Modal onClose={onClose} open={open}>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="input-group">
						<label htmlFor="timeZone">Select Timezone</label>
						<select
							name="timeZone"
							id="timeZone"
							onChange={handleChange}
							required
						>
							<option value="">Select</option>
							<option value="Asia/Dhaka">Asia/Dhaka</option>
							<option value="Asia/Kolkata">Asia/Kolkata</option>
							<option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
							<option value="Africa/Algiers">Africa/Algiers</option>
							<option value="Africa/Asmara">Africa/Asmara</option>
							<option value="Africa/Abidjan">Africa/Abidjan</option>
						</select>
					</div>
					<button onClick={handleSubmit}>Save</button>
				</form>
			</Modal>
		</>
	);
};
export default AddNewClock_Modal;

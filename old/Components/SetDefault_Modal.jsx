/* eslint-disable react/prop-types */
import Modal from './Modal';

const SetDefault_Modal = ({
	open,
	base,
	onClose,
	handleChange,
	handleBaseSubmit,
}) => {
	return (
		<>
			<Modal onClose={onClose} open={open}>
				<form onSubmit={(e) => handleBaseSubmit(e)}>
					<div className="input-group">
						<label htmlFor="name">Enter Your Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Md Readwan"
							onChange={handleChange}
							value={base.name}
							autoComplete="off"
							required
						/>
					</div>
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
							<option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
							<option value="Africa/Algiers">Africa/Algiers</option>
							<option value="Africa/Asmara">Africa/Asmara</option>
							<option value="Africa/Abidjan">Africa/Abidjan</option>
						</select>
					</div>
					<button onClick={handleBaseSubmit}>Save</button>
				</form>
			</Modal>
		</>
	);
};
export default SetDefault_Modal;

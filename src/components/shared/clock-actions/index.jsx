import { useState } from 'react';
import ClockForm from '../clock-form';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
/* eslint-disable react/prop-types */

const ClockActions = ({
	local = false,
	clock,
	updateClock,
	createClock,
	deleteClock,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const handleClock = (values) => {
		createClock(values);
	};

	const editModal = () => {
		setIsEdit(!isEdit);
	};
	const createModal = () => {
		setIsCreate(!isCreate);
	};

	return (
		<div>
			<div className="btn-group">
				<button onClick={editModal} className="btn btn-edit">
					Edit
				</button>
				{local ? (
					<button onClick={createModal} className="btn btn-create">
						Create
					</button>
				) : (
					<button
						onClick={() => deleteClock(clock.id)}
						className="btn btn-delete"
					>
						Delete
					</button>
				)}
			</div>

			{isEdit && (
				<>
					<Modal open={isEdit} onClose={editModal} center>
						<h2>Edit Clock</h2>

						<ClockForm
							values={clock}
							handleClock={updateClock}
							title={!local}
							edit={true}
							modal={editModal}
						/>
					</Modal>
				</>
			)}
			{isCreate && (
				<>
					<Modal open={isCreate} onClose={createModal} center>
						<h3>Create Clock</h3>
						<ClockForm handleClock={handleClock} modal={createModal} />
					</Modal>
				</>
			)}
		</div>
	);
};

export default ClockActions;

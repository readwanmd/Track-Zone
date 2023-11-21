import { useState } from 'react';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ClockEvents from '../../clock-events';
import EventForm from '../event-form';
/* eslint-disable react/prop-types */

const EventActions = ({ clockId, addEvent, allEvents }) => {
	const [isShowEvent, setIsShowEvent] = useState(false);
	const [isCreateEvent, setIsCreateEvent] = useState(false);

	const showEventModal = () => {
		setIsShowEvent(!isShowEvent);
	};

	const createEventModal = () => {
		setIsCreateEvent(!isCreateEvent);
	};
	return (
		<div>
			<div className="btn-group">
				<button onClick={showEventModal} className="btn btn-info">
					Show Events
				</button>
				<button onClick={createEventModal} className="btn btn-create">
					Add New Event
				</button>
			</div>

			{isShowEvent && (
				<ClockEvents
					showEventModal={showEventModal}
					isShowEvent={isShowEvent}
					allEvents={allEvents}
					clockId={clockId}
				/>
			)}

			{isCreateEvent && (
				<>
					<Modal open={isCreateEvent} onClose={createEventModal} center>
						<h3>Create Event</h3>

						<EventForm
							clockId={clockId}
							addEvent={addEvent}
							createEventModal={createEventModal}
						/>
					</Modal>
				</>
			)}
		</div>
	);
};

export default EventActions;

{
	/* <div>
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
				<button onClick={eventModal} className="btn btn-edit">
					Events
				</button>
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

			{isEvent && (
				<>
					<Modal open={isEvent} onClose={eventModal} center>
						<h3>Events</h3>
						{/* <ClockForm handleClock={handleClock} modal={createModal} /> */
}
// 				<ClockEvents />
// 			</Modal>
// 		</>
// 	)}
// </div> */}

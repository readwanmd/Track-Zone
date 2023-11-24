import { useState } from 'react';
import { toast } from 'react-toastify';
const useEvents = () => {
	const [state, setState] = useState({});

	const addEvent = (event) => {
		setState({
			...state,
			[`${event.clockId}|${event.id}`]: event,
		});

		toast.success('Event created!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	const deleteEvent = (id) => {
		const events = { ...state };
		const id_ = Object.keys(events).filter((a) => a.split('|')[1] === id);

		delete events[id_];

		setState(events);

		toast.error('Event Deleted!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	const editEvent = (id, updatedEvent) => {
		const events = { ...state };
		const id_ = Object.keys(events).filter((a) => a.split('|')[1] === id);

		events[id_] = {
			...events[id_],
			...updatedEvent,
		};

		setState(events);

		toast.success('Event updated!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	return {
		allEvents: state,
		addEvent,
		deleteEvent,
		editEvent,
	};
};
export default useEvents;

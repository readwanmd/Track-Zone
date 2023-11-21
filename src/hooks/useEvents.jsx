import { useState } from 'react';

const useEvents = () => {
	const [state, setState] = useState({});

	const getEventsByClockId = (clockId) => {
		return Object.keys(state).filter((item) => item.startsWith(clockId));
	};

	const getEvents = () => {
		return state;
	};
	// const getEvents = (isArray = false) => {
	// 	if (!isArray) return state;

	// 	return Object.values(state);
	// };

	const addEvent = (event) => {
		setState({
			...state,
			[`${event.clockId}|${event.id}`]: event,
		});

		console.log('first', state);
	};

	const deleteEvent = (id) => {
		const events = { ...state };
		delete events[id];
		setState(events);
	};

	const deleteEventsByClockId = (clockId) => {
		const events = Object.keys(state).filter(
			(item) => !item.startsWith(clockId)
		);
		setState(events);
	};

	const updateEvent = (updatedEvent, id) => {
		const events = { ...state };
		events[id] = {
			...events[id],
			...updatedEvent,
		};

		setState(events);
	};

	const e = getEvents();
	console.log('aaa=>', e);

	return {
		state: state,
		getEventsByClockId,
		getEvents,
		addEvent,
		deleteEvent,
		deleteEventsByClockId,
		updateEvent,
	};
};
export default useEvents;

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useEvents from './hooks/useEvents';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timeZone: '',
	offset: 0,
	date: null,
};

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);
	const { events, getEventsByClockId, getEvents, addEvent } = useEvents();

	useEffect(() => {
		if (Object.keys(events).length === 0) {
			const event = addEvent({ title: 'test', clockId: 'CLOCK-111' });
		}
		// console.log('all events', getEvents());
		// console.log('all events array', getEvents(true));
		// console.log('event by id', getEventsByClockId('CLOCK-111'));
	}, [events]);

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	const createClock = (clock) => {
		clock.id = uuidv4();

		setClocks([...clocks, clock]);
	};

	const updateClock = (updatedClock) => {
		let updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) {
				return updatedClock;
			}
			return clock;
		});

		setClocks(updatedClocks);
	};

	const deleteClock = (id) => {
		const updatedClocks = clocks.filter((clock) => clock.id !== id);
		setClocks(updatedClocks);
	};

	return (
		<div>
			<LocalClock
				clock={localClock}
				updateClock={updateLocalClock}
				createClock={createClock}
			/>

			<ClockList
				clocks={clocks}
				localClock={localClock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};
export default App;

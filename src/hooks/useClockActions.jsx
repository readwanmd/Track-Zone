import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timeZone: '',
	offset: 0,
	date: null,
};

const useClockActions = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	const createClock = (clock) => {
		clock.id = uuidv4();

		setClocks([...clocks, clock]);

		toast.success('Clock created!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	const updateClock = (updatedClock) => {
		let updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) {
				return updatedClock;
			}
			return clock;
		});

		setClocks(updatedClocks);

		toast.success('Clock updated!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	const deleteClock = (id) => {
		const updatedClocks = clocks.filter((clock) => clock.id !== id);
		setClocks(updatedClocks);

		toast.error('Clock deleted!', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	return {
		clocks,
		localClock,
		updateLocalClock,
		createClock,
		updateClock,
		deleteClock,
	};
};

export default useClockActions;

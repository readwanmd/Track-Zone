import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClockActions from './hooks/useClockActions';

const App = () => {
	const {
		clocks,
		localClock,
		updateLocalClock,
		createClock,
		updateClock,
		deleteClock,
	} = useClockActions();

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
			<ToastContainer />
		</div>
	);
};
export default App;

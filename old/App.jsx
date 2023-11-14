import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddNewClock_Modal from './Components/AddNewClock_Modal';
import SetDefault_Modal from './Components/SetDefault_Modal';
import Time from './Components/Time';
const App = () => {
	const [open, setOpen] = useState(false);
	const [base, setBase] = useState({ name: '', timeZone: '' });
	const [times, setTimes] = useState([]);

	const handleChange = (e) => {
		setBase({
			...base,
			[e.target.name]: e.target.value,
		});
	};

	const handleBaseSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem('base', JSON.stringify(base));
		setOpen(false);
	};

	useEffect(() => {
		setOpen(true);
	}, []);

	//new clock
	const [addClock, setAddClock] = useState(false);

	let timeState;

	const handleChangeTz = (e) => {
		timeState = [
			...times,
			{
				id: uuidv4(),
				[e.target.name]: e.target.value,
			},
		];
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setTimes(timeState);
		// console.log(times, '****');
		// localStorage.setItem('base', JSON.stringify(base));
		setAddClock(false);
	};

	const remove = (id) => {
		const index = times.findIndex((el) => el.id === id);
		setTimes((prev) => {
			return prev.filter((value, i) => i !== index);
		});
		console.log(times, '****d');
	};

	return (
		<>
			<div className="hero">
				<div className="container">
					<p className="welcome">
						Welcome{' '}
						<strong>{JSON.parse(localStorage.getItem('base'))?.name}</strong>!
					</p>

					{JSON.parse(localStorage.getItem('base'))?.timeZone && (
						<Time
							userTime={true}
							tZone={JSON.parse(localStorage.getItem('base'))?.timeZone}
							tStyle={'medium'}
							hCycle={'h12'}
						/>
					)}

					<div className="btn-group">
						<button onClick={() => setOpen(true)}>Set Default</button>
						<button onClick={() => setAddClock(true)}>Add New Clock</button>
					</div>

					<SetDefault_Modal
						base={base}
						open={open}
						onClose={() => setOpen(false)}
						handleChange={handleChange}
						handleBaseSubmit={handleBaseSubmit}
					/>
					<AddNewClock_Modal
						open={addClock}
						onClose={() => setAddClock(false)}
						handleChange={handleChangeTz}
						handleSubmit={handleSubmit}
					/>
				</div>
			</div>
			<div className="container">
				<div className="other-times">
					{times &&
						times.map((time) => (
							<Time
								key={time.id}
								tZone={time.timeZone}
								onClick={() => remove(time.id)}
							/>
						))}
				</div>
			</div>
		</>
	);
};
export default App;

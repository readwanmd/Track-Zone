/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import useTime from '../Hooks/useTime';
import useTimeDiffrence from '../Hooks/useTimeDiffrence';

const Time = (props) => {
	const { currentTime } = useTime({ ...props });
	const { difference } = useTimeDiffrence(props.tZone);
	if (props.userTime) {
		return (
			<>
				<p>
					It&apos;s <strong>{currentTime}</strong>
				</p>
			</>
		);
	} else
		return (
			<div>
				<h1>{props.tZone}</h1>
				<p>{currentTime}</p>
				<p>{difference}</p>

				<div className="btn-group">
					<button className="close" onClick={props.onClick}>
						&#128473;
					</button>
					<button className="close">&#9998;</button>
				</div>
			</div>
		);
};

Time.propTypes = {
	tZone: PropTypes.string.isRequired,
	hCycle: PropTypes.string,
	tStyle: PropTypes.string,
	userTime: PropTypes.string,
};
export default Time;

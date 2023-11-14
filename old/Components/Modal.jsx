// eslint-disable-next-line react/prop-types
const Modal = ({ open, onClose, children }) => {
	if (!open) return;
	return (
		<div className="overlay">
			<div className="modal modalContainer">
				<button className="close" onClick={onClose}>
					&#128473;
				</button>
				{children}
			</div>
		</div>
	);
};
export default Modal;

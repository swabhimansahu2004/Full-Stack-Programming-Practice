import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store";
import { privacyActions } from "../Store";

const Controls = () => {
	const dispatch = useDispatch();
	const values = useRef(null);

	const increment = () => {
		dispatch(counterActions.increment());
	};
	const decrement = () => {
		dispatch(counterActions.decrement());
	};
	const add = () => {
		if (values.current.value.trim() === "") return;
		dispatch(counterActions.add(parseInt(values.current.value)));
		values.current.value = "";
	};
	const substract = () => {
		if (values.current.value.trim() === "") return;
		dispatch(counterActions.substract(parseInt(values.current.value)));
		values.current.value = "";
	};
	const toggle = () => {
		dispatch(privacyActions.toggle());
	};

	return (
		<div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
			<input type="text" ref={values} placeholder="Enter number..." />
			<div>
				<button
					type="button"
					className="btn btn-info btn-lg px-4 gap-3"
					onClick={add}
				>
					Add
				</button>
				<button
					type="button"
					className="btn btn-warning btn-lg px-4"
					onClick={substract}
				>
					Substract
				</button>
			</div>
			<div>
				<button
					type="button"
					className="btn btn-success btn-lg px-4 gap-3"
					onClick={increment}
				>
					+1
				</button>
				<button
					type="button"
					className="btn btn-danger btn-lg px-4"
					onClick={decrement}
				>
					-1
				</button>
			</div>
			<button
				type="button"
				className="btn btn-dark btn-lg px-4"
				onClick={toggle}
			>
				Toggle
			</button>
		</div>
	);
};

export default Controls;

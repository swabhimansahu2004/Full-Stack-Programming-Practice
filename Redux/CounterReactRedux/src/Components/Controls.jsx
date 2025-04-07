import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
	const dispatch = useDispatch();
	const values = useRef();

	const increment = () => {
		dispatch({ type: "INCREMENT" });
	};
	const decrement = () => {
		dispatch({ type: "DECREMENT" });
	};
	const add = () => {
		dispatch({ type: "ADD", payload: { num: values.current.value } });
		values.current.value = "";
	};
	const substract = () => {
		dispatch({ type: "SUBSTRACT", payload: { num: values.current.value } });
		values.current.value = "";
	};
	const privacyToggle = () => {
		dispatch({ type: "TOGGLE" });
	};
	return (
		<>
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
						className="btn btn-warning btn-lg px-4 gap-3"
						onClick={privacyToggle}
					>
						Privacy Toffgle
					</button>
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
			</div>
		</>
	);
};
export default Controls;

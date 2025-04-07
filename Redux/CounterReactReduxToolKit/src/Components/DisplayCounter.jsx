import { useSelector } from "react-redux";

const DisplayCounter = () => {
	const counterValue = useSelector((store) => store.counter.counterValue);

	return <p>Counter Current Value: {counterValue}</p>;
};

export default DisplayCounter;

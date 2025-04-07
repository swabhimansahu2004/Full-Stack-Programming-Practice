import { useSelector } from "react-redux";
const DisplayCounter = () => {
	const Counter = useSelector((store) => store.counter);

	return <p>Counter Current Value: {Counter}</p>;
};
export default DisplayCounter;

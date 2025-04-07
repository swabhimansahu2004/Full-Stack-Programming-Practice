import { createStore } from "redux";

const IntialValue = {
	counter: 0,
	privacy: false,
};

const counterReducer = (store = IntialValue, action) => {
	if (action.type === "INCREMENT") {
		return { ...store, counter: store.counter + 1 }; //method-1 to avoid mutation i.e. use spread operator for object
		//return { counter: store.counter + 1, privacy: store.privacy };//method-2 to avoid mutation
	} else if (action.type === "DECREMENT") {
		return { counter: store.counter - 1, privacy: store.privacy };
	} else if (action.type === "ADD") {
		return {
			counter: store.counter + parseInt(action.payload.num),
			privacy: store.privacy,
		};
	} else if (action.type === "SUBSTRACT") {
		return {
			counter: store.counter - parseInt(action.payload.num),
			privacy: store.privacy,
		};
	} else if (action.type === "TOGGLE") {
		return { privacy: !store.privacy, counter: store.counter };
	} else {
		return { counter: 0 };
	}
};
const counterStore = createStore(counterReducer);
export default counterStore;

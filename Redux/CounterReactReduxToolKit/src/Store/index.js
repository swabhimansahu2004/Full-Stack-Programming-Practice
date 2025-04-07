import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { counterValue: 0 },
	reducers: {
		increment: (state) => {
			state.counterValue += 1;
		},
		decrement: (state) => {
			state.counterValue -= 1;
		},
		add: (state, action) => {
			state.counterValue += action.payload;
		},
		substract: (state, action) => {
			state.counterValue -= action.payload;
		},
	},
});

const privacySlice = createSlice({
	name: "privacy",
	initialState: false,
	reducers: {
		toggle: (state) => {
			return (state = !state);
		},
	},
});

const counterStore = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		privacy: privacySlice.reducer,
	},
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;

//We can create multiple files to store multiple slices
//and then combine them in the index.js file.
//For example, we can create a file called counterSlice.js
//and privacySlice.js to store the counter and privacy slices respectively.

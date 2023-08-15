import { combineReducers, legacy_createStore } from "redux";

import cartReducer from "./cartReducer"; 
import sessionReducer from "./sessionReducer";

const rootReducers = combineReducers({
	isLogged: sessionReducer,
	cart: cartReducer,
	
})

export const store = legacy_createStore(rootReducers);
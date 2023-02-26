import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

//middleware hiya function katakhod action o kadir lihom 
//3amaliya mo3ayana o kat3tihom l root reducers

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
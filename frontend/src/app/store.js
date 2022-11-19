import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import productReducer from "./features/Product/reducer";
import thunk from 'redux-thunk'

let rootReducers = combineReducers({
  product: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;

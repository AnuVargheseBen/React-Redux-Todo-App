import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import note from "./note/reducer";

const root = combineReducers({
  router: routerReducer,
  note,
});

export default root;

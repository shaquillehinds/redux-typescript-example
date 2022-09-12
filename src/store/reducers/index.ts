import { combineReducers } from "redux";
import repositoriesReducer from "./repositories.reducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

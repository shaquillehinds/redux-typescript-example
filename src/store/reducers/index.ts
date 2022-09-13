import { combineReducers } from "redux";
import repositoriesReducer from "./repositories.reducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export type StoreState = ReturnType<typeof reducers>;

export default reducers;

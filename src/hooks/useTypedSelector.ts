import { useSelector, TypedUseSelectorHook } from "react-redux";
import { StoreState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector;

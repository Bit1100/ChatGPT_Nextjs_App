import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppState } from "../store";

// Typing Hooks
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

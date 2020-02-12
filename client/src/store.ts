import { createStore, Store } from "redux";
import rootReducer from "./reducers/rootReducer";

export const store: Store = createStore(rootReducer);

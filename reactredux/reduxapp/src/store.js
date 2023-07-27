import { legacy_createStore as createStore } from "redux" ;
import rootReducer from "./reducer/index"; // it has state of all applications


const store = createStore(rootReducer);

export default store;
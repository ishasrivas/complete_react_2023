//main reducer -- include all the reducer files and it goes to store.js

import changeTheNumber from "./upDown";

import {combineReducers} from "redux"; //to combine all reducer objects


const rootReducer = combineReducers({ //main reducer goes to store
    changeTheNumber // here we write all the reducer names
})

export default rootReducer;
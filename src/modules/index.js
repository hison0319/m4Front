import { combineReducers } from "redux";
import calendarForBoard from "./calendarForBoard";
import calendarPick2ForBoard from "./calendarPick2ForBoard";
import calendarForManager from "./calendarForManager";
import calendarPick2ForManager from "./calendarPick2ForManager";

const rootReducer = combineReducers({
    calendarForBoard,
    calendarPick2ForBoard,
    calendarForManager,
    calendarPick2ForManager,
});

export default rootReducer;
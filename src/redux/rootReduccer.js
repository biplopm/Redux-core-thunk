import { combineReducers } from "redux"
import counterReduccer from "./Counter/counterReduccer"
import backgroundReduccer from "./Background/backgroundReduccer"
import todoReduccer from './Todo/todoReduccer';
import studentReduccer from "./Student/studentReduccer";



const rootReduccer = combineReducers({
    counter: counterReduccer,
    bg:backgroundReduccer,
    todo:todoReduccer,
    student: studentReduccer
})


export default rootReduccer
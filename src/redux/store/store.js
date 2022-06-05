import { createStore } from "redux";
import {expenseReducer} from '../reducer/reducer'
export const store=createStore(expenseReducer)
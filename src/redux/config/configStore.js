import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";


const rootReducer = combineReducers({
  counter,
}); // 이 안에 리듀서를 모두 넣어야 함
const store = createStore(rootReducer);

export default store;
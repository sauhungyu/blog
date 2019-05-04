import { combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import postReducer from "./postReducer";

export default combineReducers({

   form : formReducer,
   posts : postReducer
   
});
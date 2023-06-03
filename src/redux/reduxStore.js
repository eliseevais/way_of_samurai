import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogsReducer";
import musicReducer from "./musicReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
//import { reduxForm } from "redux-form";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
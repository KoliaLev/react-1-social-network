import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduecr";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(redusers);

window.store = store;

export default store;

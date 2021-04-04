import "./App.css";
import Header from "./comonents/Header/Header";
import NavBar from "./comonents/NavBar/NavBar";
import Profile from "./comonents/Profile/Profile";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Setting from "./comonents/Setting/Setting";
import { Route } from "react-router";
import DialogsContainer from "./comonents/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar sidebar={props.store.getState().sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store}
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
              // statePost={props.statePost}
            />
          )}
        />
        <Route
          path="/dialog"
          render={() => (
            <DialogsContainer
              store={props.store}
              // state={props.state}
              // dispatch={props.dispatch}
              // dialogsPage={props.state.dialogsPage}
              // sendMessage={props.sendMessage}
              // stateMessage={props.stateMessage}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;

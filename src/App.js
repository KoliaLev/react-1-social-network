import "./App.css";
import Header from "./comonents/Header/Header";
import NavBar from "./comonents/NavBar/NavBar";
import Profile from "./comonents/Profile/Profile";
import Dialogs from "./comonents/Dialogs/Dialogs";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Setting from "./comonents/Setting/Setting";
import { Route } from "react-router";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
        <Route path="/dialog" render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;

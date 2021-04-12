import "./App.css";
import Header from "./comonents/Header/Header";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Setting from "./comonents/Setting/Setting";
import { Route } from "react-router";
import DialogsContainer from "./comonents/Dialogs/DialogsContainer";
import NavBarContainer from "./comonents/NavBar/NavBarContainer";
import UsersContainer from "./comonents/Users/UsersContainer";
import ProfileContainer from "./comonents/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBarContainer />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/dialog" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;

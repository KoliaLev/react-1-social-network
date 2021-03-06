import "./App.css";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Setting from "./comonents/Setting/Setting";
import { Route } from "react-router";
import DialogsContainer from "./comonents/Dialogs/DialogsContainer";
import NavBarContainer from "./comonents/NavBar/NavBarContainer";
import UsersContainer from "./comonents/Users/UsersContainer";
import ProfileContainer from "./comonents/Profile/ProfileContainer";
import HeaderContainer from "./comonents/Header/HeaderContainer";
import LoginPage from "./comonents/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBarContainer />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialog" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/setting" component={Setting} />
      </div>
    </div>
  );
};

export default App;

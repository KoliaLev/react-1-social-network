import "./App.css";
import Header from "./comonents/Header/Header";
import NavBar from "./comonents/NavBar/NavBar";
import Profile from "./comonents/Profile/Profile";
import Dialogs from "./comonents/Dialogs/Dialogs";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";
import Setting from "./comonents/Setting/Setting";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  // обертки для проброса пропсов из индекс.жс  для диалогов
  const wrapperDialogs = () => {
    return <Dialogs {...props} />;
  };

  const wrapperProfile = () => {
    return <Profile {...props} />;
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={wrapperProfile} />
          <Route path="/dialog" component={wrapperDialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

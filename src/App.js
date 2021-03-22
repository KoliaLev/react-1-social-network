import logo from "./logo.svg";
import "./App.css";
import Header from "./comonents/Header/Header";
import NavBar from "./comonents/NavBar/NavBar";
import Profile from "./comonents/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;

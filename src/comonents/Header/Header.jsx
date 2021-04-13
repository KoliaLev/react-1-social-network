import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://as2.ftcdn.net/jpg/01/68/46/05/500_F_168460581_gCO8xAftLkO3zzsVPV8zDATEYM3d6Ckd.jpg" />
      <div className={s.login__Block}>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;

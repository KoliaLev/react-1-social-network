import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";

const NavBar = (props) => {
  let friends = props.friends;
  let frilendsElements = friends.map((f) => <Friend name={f.name} ava={f.ava} />);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialog" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/setting" activeClassName={s.active}>
          Setting
        </NavLink>
      </div>
      <div className={s.friends}>
        Friends
        {/*отрисовка друзей в низу навбара */}
        <div className={s.friedsItems}>{frilendsElements}</div>{" "}
      </div>
    </nav>
  );
};

export default NavBar;

import { connect } from "react-redux";
import NavBar from "./NavBar";

// const NavBar = (props) => {
//   let friends = props.sidebar.friends;
//   let frilendsElements = friends.map((f) => <Friend name={f.name} ava={f.ava} />);
//   return (
//     <nav className={s.nav}>
//       <div className={s.item}>
//         <NavLink to="/profile" activeClassName={s.active}>
//           Profile
//         </NavLink>
//       </div>
//       <div className={s.item}>
//         <NavLink to="/dialog" activeClassName={s.active}>
//           Messages
//         </NavLink>
//       </div>
//       <div className={s.item}>
//         <NavLink to="/news" activeClassName={s.active}>
//           News
//         </NavLink>
//       </div>
//       <div className={s.item}>
//         <NavLink to="/music" activeClassName={s.active}>
//           Music
//         </NavLink>
//       </div>
//       <div className={s.item}>
//         <NavLink to="/setting" activeClassName={s.active}>
//           Setting
//         </NavLink>
//       </div>
//       <div className={s.friends}>
//         Friends
//         <div className={s.friedsItems}>{frilendsElements}</div>
//       </div>
//     </nav>
//   );
// };

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;

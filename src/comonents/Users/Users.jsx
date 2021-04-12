import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../assets/images/User.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.usersCount);
  let pages = [];
  for (let i = props.currentPage; i <= props.currentPage + 9; i++) {
    if (2 * props.currentPage - i != props.currentPage && 2 * props.currentPage - i > 0) {
      pages.unshift(2 * props.currentPage - i);
    }
    pages.push(i);
  }

  return (
    <div>
      <div>
        <div>pages count: {pagesCount}</div>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChange(p);
              }}
              className={p === props.currentPage ? style.selectedPage : ""}>
              {p}{" "}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <NavLink to={"profile/" + u.id}>
              <img
                className={style.photo}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="ava"
              />
            </NavLink>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
            <button
              onClick={() => {
                props.togleFollow(u.id);
              }}>
              {u.followed ? "unfollow" : "follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

// const Users = (props) => {
//   if (props.users.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
//       props.setUsers(response.data.items);
//     });
//   }
//   let usersElemetns = props.users.map((u) => {
//     return (
//       <div key={u.id}>
//         <img
//           className={style.photo}
//           src={u.photos.small != null ? u.photos.small : userPhoto}
//           alt="ava"
//         />
//         <div>{u.name}</div>
//         <div>{u.status}</div>
//         <div>{"u.location.city"}</div>
//         <div>{"u.location.country"}</div>
//         <button
//           onClick={() => {
//             props.toggleFollow(u.id);
//           }}>
//           {u.followed ? "unfollow" : "follow"}
//         </button>
//       </div>
//     );
//   });
//   return (
//     <div>
//       Will be Users here
//       {usersElemetns}
//     </div>
//   );
// };

export default Users;

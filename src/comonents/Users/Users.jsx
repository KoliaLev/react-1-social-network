import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../assets/images/User.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        props.setUsers(response.data.items);
      });
    }
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => {
          debugger;
          return (
            <div key={u.id}>
              <img
                className={style.photo}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="ava"
              />
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
              <button
                onClick={() => {
                  this.props.toggleFollow(u.id);
                }}>
                {u.followed ? "unfollow" : "follow"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

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

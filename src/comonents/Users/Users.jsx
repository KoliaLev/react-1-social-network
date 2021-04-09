import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../assets/images/User.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    // если в контрукторе только передаются пропсы родителю - то сам конструктор можно неписать
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  onPageChange(page) {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                onClick={() => {
                  this.onPageChange(p);
                }}
                className={p === this.props.currentPage ? style.selectedPage : ""}>
                {p}{" "}
              </span>
            );
          })}
          {/* <span>1</span>
          <span className={style.selectedPage}>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span> */}
        </div>
        {this.props.users.map((u) => {
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

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

  //
  let inputPageNumber = React.createRef();

  //

  return (
    <div>
      <div>
        <div>pages count: {pagesCount}</div>
        <div>
          enter page{" "}
          <input
            type="number"
            ref={inputPageNumber}
            placeholder={"max:" + pagesCount}
            max={pagesCount}
          />
          <button
            onClick={() => {
              props.onPageChange(+inputPageNumber.current.value);
            }}>
            load page
          </button>
        </div>
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

export default Users;

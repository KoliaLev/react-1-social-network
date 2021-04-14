import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../assets/images/User.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
        <div>users count: {props.totalUsersCount}</div>
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
                if (u.followed) {
                  axios
                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "b26f5f83-f436-46d2-9f60-37fe761c495f",
                      },
                    })
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.togleFollow(u.id);
                      }
                    });
                } else {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "b26f5f83-f436-46d2-9f60-37fe761c495f",
                        },
                      }
                    )
                    .then((response) => {
                      debugger;
                      if (response.data.resultCode === 0) {
                        props.togleFollow(u.id);
                      }
                    });
                }
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

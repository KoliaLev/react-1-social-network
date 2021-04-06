import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
        fullName: "Kolia",
        isFriend: false,
        status: "I am a boss",
        location: { city: "Vinnytsia", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
        fullName: "Vasia",
        isFriend: true,
        status: "I am a boss",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
        fullName: "Shvartsneger",
        isFriend: false,
        status: "I am a boss",
        location: { city: "Los Angeles", country: "USA" },
      },
    ]);
  }
  let usersElemetns = props.users.map((u) => {
    return (
      <div key={u.id}>
        <img className={style.photo} src={u.photoUrl} alt="ava" />
        <div>{u.fullName}</div>
        <div>{u.status}</div>
        <div>{u.location.city}</div>
        <div>{u.location.country}</div>
        <button
          onClick={() => {
            props.toggleFollow(u.id);
          }}>
          {u.isFriend ? "unfollow" : "follow"}
        </button>
      </div>
    );
  });
  return (
    <div>
      Will be Users here
      {usersElemetns}
    </div>
  );
};

export default Users;

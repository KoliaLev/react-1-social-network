import React from "react";
import { connect } from "react-redux";
import { setUsersAC, togleFollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(togleFollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

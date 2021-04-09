import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
  togleFollowAC,
} from "../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(togleFollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

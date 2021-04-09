import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setTotalUsersAC,
  setUsersAC,
  togleFollowAC,
} from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

class UsersComponent extends React.Component {
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

  onPageChange = (page) => {
    this.props.setCurrentPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        toggleFollow={this.props.toggleFollow}
      />
    );
  }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;

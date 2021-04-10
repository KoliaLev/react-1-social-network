import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setTotalUsers,
  setUsers,
  togleFollow,
  togleIsFetch,
} from "../../Redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader1 from "../common/preloaders/Preloader1";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    // если в контрукторе только передаются пропсы родителю - то сам конструктор можно неписать
  }

  componentDidMount() {
    this.props.togleIsFetch(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`
      )
      .then((response) => {
        this.props.togleIsFetch(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.togleIsFetch(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`
      )
      .then((response) => {
        this.props.togleIsFetch(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader1 /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          usersCount={this.props.usersCount}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          togleFollow={this.props.togleFollow}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetch,
  };
};

// ----  Передаем в connect в место mapDispatchToProps обьект с колбеками(кприаторами) - connect сам и диспачит
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => dispatch(togleFollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
//     setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//     togleIsFetch: (isFetch) => dispatch(togleIsFetchAC(isFetch)),
//   };
// };

const UsersContainer = connect(mapStateToProps, {
  togleFollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  togleIsFetch,
})(UsersComponent);

export default UsersContainer;

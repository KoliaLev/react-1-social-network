import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, getUsers, getFollow } from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader1 from "../common/preloaders/Preloader1";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    // если в контрукторе только передаются пропсы родителю - то сам конструктор можно неписать
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersCount);
  }

  onPageChange = (page) => {
    this.props.getUsers(page, this.props.usersCount);
  };

  followUnfollow = (u) => {
    this.props.getFollow(u);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader1 /> : null}
        <Users
          users={this.props.users}
          usersCount={this.props.usersCount}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          isFetchFollowUser={this.props.isFetchFollowUser}
          followUnfollow={this.followUnfollow}
          onPageChange={this.onPageChange}
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
    isFetchFollowUser: state.usersPage.isFetchFollowUser,
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
  setCurrentPage,
  getUsers,
  getFollow,
})(UsersComponent);

export default UsersContainer;

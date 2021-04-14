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
import Preloader1 from "../common/preloaders/Preloader1";
import { usersAPI } from "../../api/api";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    // если в контрукторе только передаются пропсы родителю - то сам конструктор можно неписать
  }

  componentDidMount() {
    this.props.togleIsFetch(true);
    usersAPI.getUsers(this.props.currentPage, this.props.usersCount).then((data) => {
      debugger;
      this.props.togleIsFetch(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount);
    });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.togleIsFetch(true);
    usersAPI.getUsers(page, this.props.usersCount).then((data) => {
      this.props.togleIsFetch(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount);
    });
  };

  followUnfollow = (u) => {
    if (u.followed) {
      usersAPI.deleteFollow(u.id).then((response) => {
        if (response.resultCode === 0) {
          this.props.togleFollow(u.id);
        }
      });
    } else {
      usersAPI.postFollow(u.id).then((response) => {
        if (response.resultCode === 0) {
          this.props.togleFollow(u.id);
        }
      });
    }
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
          followUnfollow={this.followUnfollow}
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

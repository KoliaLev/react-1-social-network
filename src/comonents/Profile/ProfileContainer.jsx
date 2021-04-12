import React from "react";
import Profile from "./Profile";
import axios from "axios";
import Preloader1 from "../common/preloaders/Preloader1";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      // this.props.togleIsFetch(false);
      this.props.setUserProfile(response.data);
      // this.props.setTotalUsers(response.data.totalCount);
    });
  }
  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader1 /> : null}
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isFetching: state.profilePage.isFetch, // не реализован переключатель для состояния
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);

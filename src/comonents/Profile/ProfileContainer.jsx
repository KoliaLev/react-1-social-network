import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      // this.props.togleIsFetch(false);
      this.props.setUserProfile(response.data);
      // this.props.setTotalUsers(response.data.totalCount);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

let WithDataUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithDataUrlProfileContainer);

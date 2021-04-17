import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, getOneUser } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getOneUser(this.props.match.params.userId);
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

export default connect(mapStateToProps, { setUserProfile, getOneUser })(
  WithDataUrlProfileContainer
);

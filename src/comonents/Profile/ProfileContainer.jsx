import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, getOneUser } from "./../../Redux/profile-reducer";
import { Redirect, withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getOneUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
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
    isAuth: state.auth.isAuth,
  };
};

let WithDataUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getOneUser })(
  WithDataUrlProfileContainer
);

import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getOneUser, apdateStatus, getStatus } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router";
import withAuthRedirectComponent from "../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getOneUser(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to="/login" />;
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
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { getOneUser, apdateStatus, getStatus }),
  withRouter
  // withAuthRedirectComponent
)(ProfileContainer);

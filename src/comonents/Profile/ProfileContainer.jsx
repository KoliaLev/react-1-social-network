import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getOneUser } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router";
import withAuthRedirectComponent from "../Hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getOneUser(this.props.match.params.userId);
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
  };
};

let withAuthProfileComponent = withAuthRedirectComponent(ProfileContainer);

let WithDataUrlProfileContainer = withRouter(withAuthProfileComponent);

export default connect(mapStateToProps, { getOneUser })(WithDataUrlProfileContainer);

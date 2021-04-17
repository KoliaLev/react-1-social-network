import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUser, setAuthUserData } from "./../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // this.props.togleIsFetch(true);

    this.props.setAuthUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUser })(HeaderContainer);

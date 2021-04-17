import React from "react";
import { Redirect } from "react-router";

const withAuthRedirectComponent = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  return RedirectComponent;
};

export default withAuthRedirectComponent;

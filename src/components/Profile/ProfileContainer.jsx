import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
      if (!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth, navigate]);

    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  })
};

export default compose(
  connect(mapStateToProps, 
    { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);
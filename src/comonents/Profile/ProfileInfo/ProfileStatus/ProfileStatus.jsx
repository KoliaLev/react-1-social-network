import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = (e) => {
    if (this.state.editMode) this.props.apdateStatus(e.currentTarget.value);
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  editStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, PrevState) {
    if (this.props.status != prevProps.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={s.status__container}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.toggleEditMode}>{this.props.status || "---"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onFocus={(e) => e.target.select()}
              onBlur={this.toggleEditMode}
              onChange={this.editStatus}
              value={this.state.status}
              type="text"
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

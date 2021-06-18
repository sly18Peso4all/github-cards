import React, { Component } from "react";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt={profile.name} />

        <div className="info">
          <h3 className="name">{profile.name}</h3>
          <p className="company">{profile.company}</p>
        </div>
      </div>
    );
  }
}

export default Card;

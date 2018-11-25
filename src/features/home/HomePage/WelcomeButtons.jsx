import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../nav/Button/Button';

const mobileStyles = {
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const desktopStyles = {};

class WelcomeButtons extends Component {
  render() {
    const { screenWidth } = this.props;
    return (
      <div style={screenWidth <= 560 ? mobileStyles : desktopStyles}>
        <Link to="/projects">
          <Button buttonText="explore work" />
        </Link>
        <Link to="/profile">
          <Button buttonText="view profile" />
        </Link>
      </div>
    );
  }
}

export default WelcomeButtons;

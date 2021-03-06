import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../nav/Button/Button';

const mobileStyles = {
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const desktopStyles = {};

const SkillsButtons = ({screenWidth}) => {
  return (
    <div style={screenWidth <= 495 ? mobileStyles : desktopStyles}>
        <Link to="/projects">
          <Button buttonText="explore work" />
        </Link>
        <Link to="/profile">
          <Button buttonText="view profile" />
        </Link>
      </div>
  )
}

export default SkillsButtons

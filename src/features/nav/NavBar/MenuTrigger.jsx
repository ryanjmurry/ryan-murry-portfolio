import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const menuTriggerStyles = {
  display: 'fixed',
  color: 'white',
  paddingLeft: '46px',
  paddingTop: '20px',
  fontSize: '3em',
  cursor: 'pointer'
};

const MenuTrigger = ({menuOpen, handleCloseMenu, handleOpenMenu, screenWidth}) => {
  return (
    <div>
    <FontAwesomeIcon
      onClick={menuOpen ? handleCloseMenu : handleOpenMenu}
      style={menuTriggerStyles}
      icon={menuOpen && screenWidth > 768 ? 'times' : 'bars'}
    />
  </div>
  )
}

MenuTrigger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  screenWidth: PropTypes.number.isRequired,
}

export default MenuTrigger

import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from 'react-ios-switch'

const switchStyle = {
  transform: 'scale(1.4)',
  transformOrigin: 'top right',
}

const Filter = ({ icon }) => (
  <div className="filter-container">
    <FontAwesomeIcon icon={icon} color="#686868" size="3x" />
    <Switch offColor="#1a3a48" onColor="#ee8d39" style={switchStyle} />
  </div>
)

Filter.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.array,
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }).isRequired,
}

export default Filter

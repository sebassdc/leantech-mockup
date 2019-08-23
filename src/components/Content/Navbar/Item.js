import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = ({ selected, icon, title }) => (
  <div className={`navbar__item ${selected ? 'selected' : ''}`}>
    <FontAwesomeIcon
      icon={icon}
      color={selected ? 'white' : '#1a3a48'}
      size="2x"
    />
    <h5>{title}</h5>
  </div>
)

Item.propTypes = {
  selected: PropTypes.bool,
  icon: PropTypes.shape({
    icon: PropTypes.array,
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

Item.defaultProps = {
  selected: false,
}

export default Item

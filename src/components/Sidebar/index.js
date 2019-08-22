import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb as farLightbulb,
  faClock as farClock,
  faCalendarAlt as farCalendarAlt,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons'
import Filter from './Filter'
import SearchInput from '../general/SearchInput'
import logo from './imgs/logo.jpg'

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__logo-container">
      <img src={logo} alt="logo" />
    </div>
    <div className="sidebar__filters-container">
      <div className="sidebar__filters-title">
        <FontAwesomeIcon icon={farLightbulb} color="#686868" />
        <span>Smart Filters</span>
      </div>
      <div className="sidebar__divisor" />
      <Filter icon={farClock} />
      <Filter icon={farCalendarAlt} />
      <Filter icon={farHeart} />
    </div>
    <div className="sidebar__divisor" />
    <div className="sidebar__status-container">
      <span>Status</span>
      <SearchInput />
      <span className="sidebar__status-state">DELIVERED</span>
    </div>
  </div>
)

export default Sidebar

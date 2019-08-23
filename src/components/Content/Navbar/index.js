import React from 'react'
import {
  faHome,
  faStar,
  faCog,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import Item from './Item'

const Navbar = () => (
  <div className="navbar">
    <Item icon={faHome} title="Home" selected={true} />
    <Item icon={farEnvelope} title="Messages" selected={false} />
    <Item icon={faStar} title="Whishlist" selected={false} />
    <Item icon={faCog} title="Settings" selected={false} />
    <Item icon={faUser} title="My Account" selected={false} />
  </div>
)

export default Navbar

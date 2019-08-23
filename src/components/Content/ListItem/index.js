import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faArrowDown,
  faTruck,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

const ListItem = ({ data }) => (
  <div className="list-item">
    <div className="list-item__check-container">
      <FontAwesomeIcon icon={faCheckCircle} color="#ee8d39" size="3x" />
    </div>
    <div className="list-item__info">
      <div className="list-item__info-date">
        <span>{dayjs(data.datetime).format('dddd, Do, YYYY h:mm A')}</span>
      </div>
      <div className="list-item__divisor" />
      <div className="list-item__info-locations">
        <span>{data.locationStart}</span>
        <FontAwesomeIcon icon={faArrowDown} color="#ee8d39" />
        <span>{data.locationEnd}</span>
      </div>
      <div className="list-item__divisor" />
      <div className="list-item__info-vehicle">
        <FontAwesomeIcon
          icon={faTruck}
          color="#686868"
          size="3x"
          flip="horizontal"
        />
      </div>
      <div className="list-item__info-cost">
        <h2>
          {data.cost.toLocaleString('en-US', {
            currency: 'USD',
            minimumFractionDigits: 2,
          })}
        </h2>
      </div>
      <div className="list-item__info-settings">
        <div className="square">1</div>
        <FontAwesomeIcon icon={faEllipsisV} color="#686868" size="lg" />
      </div>
    </div>
  </div>
)

export default ListItem

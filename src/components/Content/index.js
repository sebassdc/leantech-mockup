import React from 'react'
import Navbar from './Navbar'
import SearchInput from '../general/SearchInput'
import ListItem from './ListItem'
import data from './data'

const Content = () => (
  <div className="content">
    <Navbar />
    <div className="content__search-bar-container">
      <SearchInput />
    </div>
    <div className="content__list-container">
      {data.map(e => (
        <ListItem key={e.id} data={e} />
      ))}
    </div>
  </div>
)

export default Content

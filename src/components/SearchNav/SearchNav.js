import React from 'react'
import './SearchNav.css'
const SearchNav = (props) => {
  return (
    <div className="searchNav">
      <div className="searchInput"><input type="text" className="input" placeholder="Search repositories..."/></div>
      <div className="buttons">
        <button>Type :All<i className="fa fa-angle-down" aria-hidden="true"></i></button>
        <button>Language :All<i className="fa fa-angle-down" aria-hidden="true"></i></button>
        <button className="new"><i className="fa " aria-hidden="true"></i>New</button>
      </div>
    </div>
  )
}

export default SearchNav

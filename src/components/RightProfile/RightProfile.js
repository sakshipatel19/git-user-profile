import React from 'react'
import './RightProfile.css'
import ProfileNav from '../ProfileNavItem/ProfileNavItem'
import SearchNav from '../../containers/SearchNav/SearchNav'
const RightProfile = (props) => {
  const navItems={
    repo : props.rightData.public_repos,
    followers : props.rightData.followers,
    following : props.rightData.following
  }
  return (
    <div className="rightporfile">
      <ProfileNav data={navItems}/>
      <SearchNav url={props.rightData.repos_url}/>
    </div>
  )
}

export default RightProfile;

import React from 'react'
import Loader from './UI/Loader/Loader'
import LeftProfile from './LeftProfile/LeftProfile';
import RightProfile from './RightProfile/RightProfile'
import './UsersProfile.css'
const UserProfile = (props) => {
  return (
    <div className="userProfile">
      <LeftProfile leftData={props.user}/>
      <RightProfile rightData={props.user}/>
    </div>
  )
}

export default UserProfile

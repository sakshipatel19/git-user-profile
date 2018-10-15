import React from 'react'
import Loader from './UI/Loader/Loader'
import LeftProfile from './LeftProfile/LeftProfile';
import RightProfile from './RightProfile/RightProfile'
const UserProfile = (props) => {
  return (
    <div style={{display:"flex", width:"980px" , "margin": "0px auto"}}>
      <LeftProfile leftData={props.user}/>
      <RightProfile rightData={props.user}/>
    </div>
  )
}

export default UserProfile

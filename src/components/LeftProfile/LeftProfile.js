import React from 'react'
import  './LeftProfile.css'
const LeftProfile = (props) => {
  return (
    <div className="leftprofile">
      <div><img className="profileImage" src={props.leftData.avatar_url} alt="AvatorImage"/></div>
      <div className="name">{props.leftData.name}</div>
      <div className="loginId">{props.leftData.login}</div>
      <div className="bio">{props.leftData.bio}</div>
      <div className="editbiodiv"><button className="editbio" type="button">Edit Bio</button></div>
      <div className="others"><i className="fa fa-users mLR5" aria-hidden="true"></i>{props.leftData.company}</div>
      <div className="others"><i className="fa fa-map-marker mLR5" style={{fontSize:"22px"}}  aria-hidden="true"></i>{props.leftData.location}</div>
      <div className="link others"><i className="fa fa-envelope-o mLR5" aria-hidden="true"></i>supreetsingh.247@gmail.com</div>
    </div>
  )
}

export default LeftProfile

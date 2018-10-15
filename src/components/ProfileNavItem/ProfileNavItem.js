import React from 'react'

const ProfileNav = (props) => {
  return (
    <div className="profile-nav-items">
      <div className="nav-items">Overview</div>
      <div className="nav-items active">Repositories<i className="oval" aria-hidden="true">{props.data.repo}</i></div>
      <div className="nav-items">Stars<i className="oval" aria-hidden="true">5</i></div>
      <div className="nav-items">Followers<i className="oval" aria-hidden="true">{props.data.followers}</i></div>
      <div className="nav-items">Following<i className="oval" aria-hidden="true">{props.data.following}</i></div>
    </div>
  )
}

export default ProfileNav

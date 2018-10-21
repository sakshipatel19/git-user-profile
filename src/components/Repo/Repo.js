import React from 'react'
import './Repo.css'
const Repo = (props) => {
  let date = props.repodata.updated_at.split("T")[0].split("-");
  let newDate = new Date(date[0],date[1],date[2]);
  return (
    <div className="repo">
      <div><h3 style={{color:"#0366d6"}}>{props.repodata.name}</h3></div>
        {props.repodata.description? <div className="decs">{props.repodata.description}</div> :null}
        <div style={{display:"flex"}}>
          {props.repodata.language?<div className="lang">{props.repodata.language}</div> :null}
          {props.repodata.forks_count > 0 ? <div className="fork"><i className="fa fa-code-fork mLR5" aria-hidden="true"></i>{props.repodata.forks_count}</div> :null}
          {props.repodata.license?<div className="lang"><i className="fa fa-balance-scale mLR5" aria-hidden="true"></i>{props.repodata.license.spdx_id}</div> :null}
          {props.repodata.updated_at?<div className="lang">Updated &nbsp;{newDate.toDateString()}</div> :null}
        </div>
    </div>
  )
}

export default Repo;

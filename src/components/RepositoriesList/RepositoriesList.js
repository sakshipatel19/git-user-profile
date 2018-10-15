import React from 'react'
import Repo from '../Repo/Repo';
const RepositoriesList = (props) => {
  let list = props.list.map(repo => <Repo key ={repo.id}repodata={repo}/>)
  return (
    <div>
      {list}
    </div>
  )
}

export default RepositoriesList

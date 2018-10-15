import React from 'react'
import axios from 'axios';
import RepositoriesList from '../../components/RepositoriesList/RepositoriesList'
class Repositories extends React.Component {
  state={
    repositories:[]
  }
  componentDidMount(){
      axios.get(this.props.url)
      .then(response =>{
        this.setState({
          repositories: response.data
        })
      }).catch(error=>{
        console.log(error)
      })
  }
  render () {
    let repoList = this.state.repositories.length ?<RepositoriesList list={this.state.repositories}/>: null;
    return(
      <div>
      {repoList}
      </div>
    )
  }
}

export default Repositories;

import React from 'react'
import './SearchNav.css'
import axios from 'axios'
import RepositoriesList from '../../components/RepositoriesList/RepositoriesList';
class SearchNav extends React.Component {
  state={
    repositories:[],
    text :'',
    filterdList :[]
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
  fetchFilteredList = () =>{
    let filterdList;
    if(this.state.repositories.length){
      filterdList = this.state.repositories.filter((repo) =>{
        return repo.name.toLowerCase().includes(this.state.text);
      })
    }
    this.setState({
       filterdList : filterdList
    });
  }
  handleSearch = (event) =>{
    this.setState({
      text : event.target.value
    },
  ()=>{this.fetchFilteredList()});
  }
  render () {
    let repoList = this.state.text.length ?<RepositoriesList list={this.state.filterdList}/>: <RepositoriesList list={this.state.repositories}/>;
    return (
      <div>
        <div className="searchNav">
          <div className="searchInput"><input type="text" className="input" value={this.state.text} onChange={(event)=>{this.handleSearch(event)}} placeholder="Search repositories..."/></div>
          <div className="buttons">
            <button>Type: All<i className="fa fa-angle-down" aria-hidden="true"></i></button>
            <button>Language:All<i className="fa fa-angle-down" aria-hidden="true"></i></button>
            <button className="new"><i className="fa " aria-hidden="true"></i>New</button>
          </div>
        </div>
        { this.state.repositories ? repoList : null }
      </div>
    )
  }
}

export default SearchNav;

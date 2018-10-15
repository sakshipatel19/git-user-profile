import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import UserProfile from "./components/UserProfile";
import Loader from "./components/UI/Loader/Loader";

class App extends Component {
  state={
    userProfile : {},
    loading :true
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/supreetsingh247")
    .then(response => {
      this.setState({
        userProfile: response.data,
        loading : false
      });
    }).catch(error => {console.log(error)})
  }
  render () {
      let user = this.state.loading ? <Loader/> : <UserProfile user={this.state.userProfile}/> ;
      return(
        <div>{user}</div>
      );
  }
}

export default App;

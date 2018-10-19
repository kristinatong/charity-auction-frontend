import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignOn from './components/SignOn'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage'


class App extends Component {
  state = {
    users:[],
    currentUser:{username:'kt@aol.com',password:'123'}, // *** REMEMBER TO REMOVE THIS LATER
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(userArray => {
      this.setState({users:userArray})
    })
  }

  handleSignOn = (username,password) => {
    let authenticatedUser = this.state.users.find(user => {
      return user.email === username && user.password === password
    })
    if (!authenticatedUser){
      alert("Hey you're not allowed to be here!")
    } else {
      this.setState({currentUser:authenticatedUser})

    }
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <Router>
        <div>
          {!this.state.currentUser ? <SignOn handleSignOn={this.handleSignOn}/> : <HomePage />}



        </div>
      </Router>
    );
  }
}

export default App;

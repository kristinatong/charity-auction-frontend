import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignOn from './components/SignOn'
import HomePage from './components/HomePage'

const USERS_API_ENDPOINT = "http://localhost:3001/api/v1/users"
const AUCTIONS_API_ENDPOINT = "http://localhost:3001/api/v1/auctions"

class App extends Component {
  state = {
    users:[],
    currentUser: {"id":1,"name":"kristina","email":"a@aol.com","password":"password","prof_pic":"tbd","created_at":"2018-10-19T16:24:38.983Z","updated_at":"2018-10-19T16:24:38.983Z"}, // *** REMEMBER TO REMOVE THIS LATER
    auctions: []
  }

  componentDidMount(){
    fetch(USERS_API_ENDPOINT)
    .then(resp => resp.json())
    .then(userArray => {
      this.setState({
        users:userArray
      })
    })
    fetch(AUCTIONS_API_ENDPOINT)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        auctions:data
      })
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

  handleNewAuction = (auctionObj) =>{
    let newAuction = {...auctionObj, seller_id:this.state.currentUser.id}
    fetch(AUCTIONS_API_ENDPOINT,{
      method: "POST",

      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(
        newAuction
      )
    }).then(r => r.json())
      .then(data=>{
        this.setState({
          auctions: data
        })
      })



}

  //{item_name:"whatever",item_description:"desc",item_pic:"tbd", seller_id:1}

  render() {
    console.log(this.state)
    return (

        <div>
          {!this.state.currentUser ? <SignOn handleSignOn={this.handleSignOn}/> : <HomePage handleNewAuction={this.handleNewAuction} state={this.state}/>}



        </div>

    );
  }
}

export default App;

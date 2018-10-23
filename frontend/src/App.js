import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignOn from './components/SignOn'
import HomePage from './components/HomePage'

const USERS_API_ENDPOINT = "http://localhost:3000/api/v1/users"
const AUCTIONS_API_ENDPOINT = "http://localhost:3000/api/v1/auctions"

class App extends Component {
  state = {
    users: [],
    currentUser: {"id":36,"name":"kristina","email":"a@aol.com","password":"password","prof_pic":"tbd","created_at":"2018-10-22T22:28:58.968Z","updated_at":"2018-10-22T22:28:58.968Z"},
    auctions: [],
    selectedAuction: null
  }

  componentDidMount() {
    fetch(USERS_API_ENDPOINT).then(resp => resp.json()).then(userArray => {
      this.setState({users: userArray})
    })
    fetch(AUCTIONS_API_ENDPOINT).then(resp => resp.json()).then(data => {
      this.setState({auctions: data})
    })
  }

  handleSignOn = (username, password) => {
    let authenticatedUser = this.state.users.find(user => {
      return user.email === username && user.password === password
    })
    if (!authenticatedUser) {
      alert("Hey you're not allowed to be here!")
    } else {
      this.setState({currentUser: authenticatedUser})

    }
  }

  handleCreateNewUser = (newUser) => {
    fetch(USERS_API_ENDPOINT, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(resp => resp.json())
    .then(newlyCreatedUser => {
      this.setState({
        currentUser: newlyCreatedUser,
        users: [...this.state.users,newlyCreatedUser]
      })
    })
  }

  handleSignOut = (event) => {
    this.setState({currentUser: null})
  }

  handleNewAuction = (auctionObj) => {
    let newAuction = {
      ...auctionObj,
      seller_id: this.state.currentUser.id
    }
    fetch(AUCTIONS_API_ENDPOINT, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAuction)
    }).then(r => r.json()).then(data => {
      this.setState({auctions: data})
    })
  }

  handleSelect = (auctionObj) => {

      let auctionToSelect = this.state.auctions.find((auction)=>{
        return auction.id == auctionObj.id
      })

      this.setState({
        selectedAuction: auctionToSelect
      })


    // this.setState({selectedAuction: auctionObj})
  }

  handleIncremementBid = (amount, auction) => {
    if (auction.bids.length == 0 || amount >= auction.bids[0].amount) {
      let bidAmount = parseInt(amount)
      let auctionId = auction.id

      fetch('http://localhost:3000/api/v1/bids', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({auction_id: auctionId, bidder_id: this.state.currentUser.id, amount: bidAmount})
      }).then(res => res.json()).then(data => {

        this.setState({
          selectedAuction: {
            ...this.state.selectedAuction,
            bids: [
              ...this.state.selectedAuction.bids,
              data
            ]
          }
        }, () => {
          const newAuctions = this.state.auctions.map(auction => {
            if (auction.id === this.state.selectedAuction.id) {
              return this.state.selectedAuction
            } else {
              return auction
            }
          })
          this.setState({auctions: newAuctions})
        })

      })
    } else {
      alert(`i pity the fool who don't have enough money to spend on my charity`)
    }
  }

  handleDeleteAuction = (event, auctionId) => {
    fetch(`${AUCTIONS_API_ENDPOINT}/${auctionId}`, {method: 'DELETE'}).then(r => r.json()).then(data => {
      this.setState({auctions: data, selectedAuction: null})
    })
  }

  render() {
    console.log(this.state)
    return (<div>
      {
        !this.state.currentUser
          ? <SignOn handleCreateNewUser={this.handleCreateNewUser} handleSignOn={this.handleSignOn}/>
          : <HomePage handleSignOut={this.handleSignOut} handleDeleteAuction={this.handleDeleteAuction} handleIncremementBid={this.handleIncremementBid} handleNewAuction={this.handleNewAuction} state={this.state} handleSelect={this.handleSelect}/>
      }

    </div>);
  }
}

export default App;

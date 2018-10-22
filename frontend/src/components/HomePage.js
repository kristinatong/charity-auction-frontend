import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from "./NavBar"
import AuctionsList from "./AuctionsList"
import NewAuctionForm from "./NewAuctionForm"


class HomePage extends React.Component{


  homeRender(){
    return(
      <div className = "background-image">
        <h1>This is the Home Page</h1>

      </div>
    )

  }


  render(){
    return(
      <Router>
        <div>
          <NavBar />
          <Route exact path = "/" render= {this.homeRender}/>

          <Route exact path = "/auctions" render= {() => <AuctionsList handleDeleteAuction={this.props.handleDeleteAuction} currentUser={this.props.state.currentUser} handleIncremementBid={this.props.handleIncremementBid} auctions={this.props.state.auctions}
           handleSelect = {this.props.handleSelect}
           selectedAuction = {this.props.state.selectedAuction}/>}/>
          <Route exact path = "/users" render= {() =>(<h1>These are users</h1>)}/>
          <Route exact path = "/create_new_auction" render= {() => <NewAuctionForm handleNewAuction={this.props.handleNewAuction}/>}/>
        </div>
      </Router>
    )
  }



}

export default HomePage;

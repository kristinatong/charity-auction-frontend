import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from "./NavBar"
import AuctionsList from "./AuctionsList"
import NewAuctionForm from "./NewAuctionForm"
import UsersList from "./UsersList"
import {Header, Icon, Image} from "semantic-ui-react"


class HomePage extends React.Component{


  homeRender(){
    return(
      <div className = "background-image">
        <Header as="h1" icon textAlign = "center">
          <Icon name="gem outline"/>
          <Header.Content>  </Header.Content>

        </Header>
      </div>
    )

  }


  render(){
    return(
      <Router>
        <div>
          <NavBar handleSignOut={this.props.handleSignOut}/>
          <Route exact path = "/" render= {this.homeRender}/>

          <Route exact path = "/auctions" render= {() => <AuctionsList handleDeleteAuction={this.props.handleDeleteAuction} currentUser={this.props.state.currentUser} handleIncremementBid={this.props.handleIncremementBid} auctions={this.props.state.auctions}
           handleSelect = {this.props.handleSelect}
           selectedAuction = {this.props.state.selectedAuction}/>}/>
          <Route exact path = "/users" render= {() =><UsersList users={this.props.state.users} />}/>
          <Route exact path = "/create_new_auction" render= {() => <NewAuctionForm handleNewAuction={this.props.handleNewAuction}/>}/>
        </div>
      </Router>
    )
  }



}

export default HomePage;

import React from "react"
import AuctionTile from "./AuctionTile"
import { Card, Grid, Image, Item, Placeholder, Container, Header, Icon, Segment, Table} from 'semantic-ui-react'
import AuctionCard from './AuctionCard'

export default class AuctionsList extends React.Component{

  renderCard = () => {
    return(
     <Segment color='blue'>
      <Header as='h2' icon textAlign='center'>
        <Icon name='gavel' circular />
        <Header.Content>Friends</Header.Content>
      </Header>
      <Image centered size='large' src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
    </Segment>

    )
  }

  render(){
  const divStyle = {
    overflow:"scroll"
  }

    return(
      <div>
        <Grid celled>

        <Grid.Column width={6} >
        <Item.Group divided style={divStyle}>

          {this.props.auctions.map((auctionObj)=>{
            return(<AuctionTile key={auctionObj.id} auctionObj={auctionObj} handleSelect = {this.props.handleSelect}/>)
          })}


        </Item.Group>
        </Grid.Column>

        <Grid.Column width={10}>
          {this.props.selectedAuction ? <AuctionCard handleDeleteAuction={this.props.handleDeleteAuction} currentUser={this.props.currentUser} handleIncremementBid={this.props.handleIncremementBid} item={this.props.selectedAuction}/> : this.renderCard()}
        </Grid.Column>


        </Grid>
      </div>

    )
  }




}

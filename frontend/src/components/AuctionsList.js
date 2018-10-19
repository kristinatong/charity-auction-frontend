import React from "react"
import AuctionTile from "./AuctionTile"
import { Card, Grid, Image, Item } from 'semantic-ui-react'

export default class AuctionsList extends React.Component{




  render(){

//     const divStyle = {
//   position: 'fixed',
//   right: 0
//
// };

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
          <Card>
            <Card.Header>
            {this.props.selectedAuction.item_name}
            </Card.Header>

            

            <Card.Description>
              {this.props.selectedAuction.item_description}
            </Card.Description>

          </Card>



        </Grid.Column>



        </Grid>
      </div>

    )
  }




}

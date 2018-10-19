import React from "react"
import AuctionTile from "./AuctionTile"
import { Image, Item } from 'semantic-ui-react'

export default class AuctionsList extends React.Component{
  render(){

    return(
      <div>
        <Item.Group divided>
          {this.props.auctions.map((auctionObj)=>{
            return(<AuctionTile key={auctionObj.id} auctionElement={auctionObj} />)
          })}


        </Item.Group>
      </div>

    )
  }




}

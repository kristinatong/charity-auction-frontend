import React from "react"
import AuctionCard from "./AuctionCard"
import { Image, Item } from 'semantic-ui-react'

const AuctionTile = (props) => {

  return(
    <Item>

      <Item.Content>
        <Item.Header>{props.auctionElement.item_name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        {props.auctionElement.item_description}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}



export default AuctionTile

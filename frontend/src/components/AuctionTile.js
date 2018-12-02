import React from "react"
import AuctionCard from "./AuctionCard"
import { Grid, Image, Item } from 'semantic-ui-react'

const AuctionTile = (props) => {
  const handleClick = (event) => {
    props.handleSelect(props.auctionObj)
  }

  return(

    <Item onClick={handleClick}>

      <Item.Content>

        <Item.Header>{props.auctionObj.item_name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        {props.auctionObj.item_description}
        </Item.Description>
      </Item.Content>
    </Item>



  )
}



export default AuctionTile

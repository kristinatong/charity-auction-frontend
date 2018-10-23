import React from "react"
import {NavLink} from "react-router-dom"
import {Modal, Button, Segment, Item, Icon, List} from "semantic-ui-react"



const UserCard = (props) => {

  const UserCardStyle = {
    maxWidth: "450px"
  }

  const handleSelect = (auction) => {
    //console.log(auction);
     props.handleSelect(auction)
  }

  const UserModal = () => {
    return(
      <Modal medium trigger={UserCardDetails()}>
        <Modal.Header> {props.user.name} </Modal.Header>


        <Modal.Description>

          <List divided>

            {props.user.auctions.map((auction)=>{
              return(
                <List.Item onClick={()=>(handleSelect(auction))}>
                <List.Icon name = "gavel"/>
                <List.Content>
                <NavLink to="/auctions">
                  <List.Header>   {auction.item_name}  </List.Header>

                </NavLink>
                </List.Content>
                </List.Item>
              )
            })}

          </List>
        </Modal.Description>
      </Modal>
    )
  }


  const UserCardDetails = () => {
    return(
      <div style={UserCardStyle}>
        <Segment>

        <Item>
          <Item.Content>

            <Item.Header> <Icon name="rebel"/>{props.user.name}</Item.Header>

          </Item.Content>


        </Item>

        </Segment>
      </div>
    )
  }



  return(
    <div>
      {UserModal()}
    </div>
  )
}


export default UserCard

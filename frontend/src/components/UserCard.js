import React from "react"

import {Segment, Item, Icon} from "semantic-ui-react"


const UserCard = (props) => {
  console.log(props);
  return(
    <div>
      <Segment width={4}>
      <Item>
        <Item.Content>

          <Item.Header> <Icon name="rebel"/>{props.user.name}</Item.Header>

        </Item.Content>

      </Item>
      </Segment>
    </div>
  )
}


export default UserCard

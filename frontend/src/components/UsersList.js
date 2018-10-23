import React from "react"
import {Item} from "semantic-ui-react"

import UserCard from "./UserCard"


const UsersList = (props) => {

 const listStyle = {
   "margin-left":"25%",
   "margin-top":"10%"

 }

  console.log(props.users);

  return(
    <div style={listStyle}>
      <Item.Group>
        {props.users.map((userObj)=>{
          return <UserCard key={userObj.id} user={userObj} />
        })}


      </Item.Group>
    </div>
  )
}

export default UsersList

import React from "react"
import {NavLink} from "react-router-dom"
import {Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment,
  Menu,
  Icon,
  Sidebar } from "semantic-ui-react"


const NavBar = () => {
  return(
    <Menu inverted>
      <Menu.Item>
        <NavLink
          to= "/">Home
        </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/auctions">Auctions
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/users">Users
        </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/create_new_auction">Create Auction
        </NavLink>
    </Menu.Item>

    </Menu>

  )
}


export default NavBar



//
//
//

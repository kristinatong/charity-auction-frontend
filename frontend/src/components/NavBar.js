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

const NavBar = (props) => {

  const NavBarStyle = {
    position: "fixed"
  }




  return(
    <div>
    <Menu inverted>
      <Menu.Item>
        <NavLink
          to= "/"><Icon name='home'/>&nbsp;Home
        </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/auctions"><Icon name='gavel'/>&nbsp;Auctions
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/users"><Icon name='users'/>Users
        </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/create_new_auction">Create Auction
        </NavLink>
    </Menu.Item>

    <div className="ui right dropdown item"/>

    <Dropdown item text='Account'>
          <Dropdown.Menu>
            <Dropdown.Item icon='user' text='Edit Profile' />

            <Dropdown.Item onClick={props.handleSignOut} icon='log out' text='Logout' />
          </Dropdown.Menu>
        </Dropdown>
    </Menu>
    </div>
  )
}

export default NavBar



//
//
//

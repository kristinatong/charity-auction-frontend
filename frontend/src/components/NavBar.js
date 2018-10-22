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
          to= "/"><Icon name='home'/>&nbsp;Home
        </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink
        to= "/auctions"><i className="fas fa-gavel"/>&nbsp;&nbsp;Auctions
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

    <div class="ui right dropdown item"/>

    <Dropdown item text='Account' direction='left'>
          <Dropdown.Menu>
            <Dropdown.Item icon='user' text='Edit Profile' />
              <Dropdown.Item><i className="fas fa-gavel"/>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to= "/create_new_auction">Create Auction</NavLink>
              </Dropdown.Item>
            <Dropdown.Item icon='log out' text='Logout' />
          </Dropdown.Menu>
        </Dropdown>
    </Menu>

  )
}

export default NavBar



//
//
//

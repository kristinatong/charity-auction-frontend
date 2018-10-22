import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import {NavLink} from "react-router-dom"


class SignOn extends React.Component {
  constructor(props){
    super(props)
    this.state = {clicked:false}
  }

  handleSignOn = (event) => {
    event.preventDefault()

    this.props.handleSignOn(event.target.username.value,event.target.password.value)
  }
  onNewUserClick = (event) => {
    this.setState({clicked:!this.state.clicked})

  }


  onNewUserSubmit = (event) => {

    let newUser = {name:event.target.name.value,email:event.target.email.value,password:event.target.password.value,prof_pic:event.target.pic.value}
    this.props.handleCreateNewUser(newUser)

  }


  render(){
    console.log(this.props)
    if(this.state.clicked === false){


    return(
      <div>
        <Form onSubmit={this.handleSignOn}>
          <Form.Field>
            <label>Email</label>
            <input name = "username" placeholder='Username' />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input name= "password" type="password" placeholder='Pasword' />
          </Form.Field>



        <Button type='submit'>Submit</Button>

      </Form>


      <br/><Button onClick ={this.onNewUserClick}> Create a New User </Button>


      </div>

    )
  } else {
    return (
      <div>
        <Form onSubmit={this.onNewUserSubmit}>
          <Form.Field>
            <label>Name</label>
            <input name = "name" placeholder='Username' />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <input name = "email" placeholder='Email' />
          </Form.Field>

          <Form.Field>
            <label>Profile Pic URL</label>
            <input name = "pic" placeholder='Profile Picture' />
          </Form.Field>


          <Form.Field>
            <label>Password</label>
            <input name= "password" type="password" placeholder='Pasword' />
          </Form.Field>

          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>

        <Button type='submit'>Create User</Button>

      </Form>
      <br/><Button onClick ={this.onNewUserClick}> Existing User Sign-in</Button>


      </div>


    )




  }
}}

export default SignOn

//
// <form onSubmit={this.handleSignOn}>
//   <input type='text' name="username" placeholder="username" /> <br />
//   <input type='password' name="password" placeholder="password" /> <br />
//   <input type='submit' value='submit' />
// </form>

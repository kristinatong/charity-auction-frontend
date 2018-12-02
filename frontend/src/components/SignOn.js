import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from 'semantic-ui-react'

import {NavLink} from "react-router-dom"

class SignOn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleSignOn = (event) => {
    event.preventDefault()

    this.props.handleSignOn(event.target.username.value, event.target.password.value)
  }
  onNewUserClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })

  }

  onNewUserSubmit = (event) => {

    let newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      prof_pic: event.target.pic.value
    }
    this.props.handleCreateNewUser(newUser)

  }

  render() {
    console.log(this.props)
    if (this.state.clicked === false) {

      return (

        <div className='login-form'>
          <style>
            {
              ` body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
          <Grid textAlign='center' style={{
              height: '100%'
            }} verticalAlign='middle'>
            <Grid.Column style={{
                maxWidth: 450
              }}>
              <Header as='h2' color='grey' textAlign='center'>
                <Icon name="gavel" />
                Log-in to your account
              </Header>
              <Form size='large' onSubmit={this.handleSignOn}>
                <Segment stacked="stacked">
                  <Form.Input name="username" fluid="fluid" icon='user' iconPosition='left' placeholder='E-mail address'/>
                  <Form.Input name="password" fluid="fluid" icon='lock' iconPosition='left' placeholder='Password' type='password'/>

                  <Button type="submit" color='grey' fluid="fluid" size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us?
                <a href='#' onClick={this.onNewUserClick}> Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>

    )} else {
      return (

          <div className='login-form'>
            <style>
              {
                ` body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>
            <Grid textAlign='center' style={{
                height: '100%'
              }} verticalAlign='middle'>
              <Grid.Column style={{
                  maxWidth: 450
                }}>
                <Header as='h2' color='grey' textAlign='center'>
                  <Icon name='gavel' />
                  Create an account
                </Header>
                <Form size='large' onSubmit={this.onNewUserSubmit}>
                  <Segment stacked="stacked">
                    <Form.Input name="name" fluid="fluid" icon='user' iconPosition='left' placeholder='Name'/>
                    <Form.Input name="email" fluid="fluid" icon='user' iconPosition='left' placeholder='E-mail address'/>
                    <Form.Input name="password" fluid="fluid" icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                    <Form.Input name="pic" fluid="fluid" icon='user' iconPosition='left' placeholder='Profile Picture'/>

                    <Button type="submit" color='grey' fluid="fluid" size='large'>
                      Sign Up
                    </Button>
                  </Segment>
                </Form>

              </Grid.Column>
            </Grid>
          </div>

    )

    }
  }
}

export default SignOn

//
// <form onSubmit={this.handleSignOn}>
//   <input type='text' name="username" placeholder="username" /> <br />
//   <input type='password' name="password" placeholder="password" /> <br />
//   <input type='submit' value='submit' />
// </form>

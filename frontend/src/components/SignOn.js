import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignOn extends React.Component {
  constructor(props){
    super(props)
  }

  handleSignOn = (event) => {
    event.preventDefault()

    this.props.handleSignOn(event.target.username.value,event.target.password.value)
  }


  render(){
    console.log(this.props)
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

          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>


      </div>

    )
  }
}

export default SignOn

//
// <form onSubmit={this.handleSignOn}>
//   <input type='text' name="username" placeholder="username" /> <br />
//   <input type='password' name="password" placeholder="password" /> <br />
//   <input type='submit' value='submit' />
// </form>

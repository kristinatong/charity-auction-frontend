import React from 'react';

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
      <form onSubmit={this.handleSignOn}>
        <input type='text' name="username" placeholder="username" /> <br />
        <input type='password' name="password" placeholder="password" /> <br />
        <input type='submit' value='submit' />
      </form>
    )
  }
}

export default SignOn

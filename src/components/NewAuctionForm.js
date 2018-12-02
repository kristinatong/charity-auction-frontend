import React from "react"
import {
  Button,
  Checkbox,
  Form,
  TextArea,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from 'semantic-ui-react'
import {Link, Redirect} from "react-router-dom"

export default class NewAuctionForm extends React.Component {
  state = {
    isSubmitted: false
  }

  handleFormSubmit = (event) => {

    event.preventDefault()
    let auctionObj = {
      item_name: event.target.itemName.value,
      item_description: event.target.description.value,
      start_date: event.target.startDate.value,
      end_date: event.target.endDate.value,
      item_pic: event.target.itemPic.value
    }
    this.props.handleNewAuction(auctionObj)
    this.setState({
      isSubmitted: !this.state.isSubmitted
    })

  }

  render() {
    return (<div>

      <div className='auction-form'>
        <style>
          {
            ` body > div,
            body > div > div,
            body > div > div > div.auction-form {
              height: 100%;
            }
          `}</style>
        <Grid textAlign='center' style={{
            height: '100%'
          }} verticalAlign='middle'>
          <Grid.Column style={{
              maxWidth: 450
            }}>
            <br/>
            <Header as='h2' color='grey' textAlign='center'>
              <Icon name="gavel" />
              Create Auction
            </Header>
            <Form size='large' onSubmit={this.handleFormSubmit}>
              <Segment stacked="stacked">
                <Form.Input name="itemName" fluid="fluid" placeholder='Item Name'/>
                <Form.TextArea name="description" fluid="fluid" icon='lock' iconPosition='left' placeholder='Description' />
                <Form.Input label='Start Date' name="startDate" fluid="fluid" type='date'/>
                <Form.Input label='End Date'name="endDate" fluid="fluid" type='date'/>
                <Form.Input name="itemPic" fluid="fluid" placeholder='Item Photo URL'/>
                <Button type="submit" color='grey' fluid="fluid" size='large'>
                  Create Auction
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

      {
        this.state.isSubmitted
          ? <Redirect to='/auctions'/>
          : null
      }

  </div>)
  }
}

import React from "react"
import {Button, Checkbox, Form, TextArea} from 'semantic-ui-react'

export default class NewAuctionForm extends React.Component {

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
  }

  render() {
    return (<div className="ui two column centered grid">
      <Form size='medium' onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Item Name</label>
            <input placeholder='Item Name' name="itemName"/>
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <TextArea placeholder='Description' name="description"/>
          </Form.Field>

          <Form.Field >
            <label>Start Date</label>
            <input type="date" name="startDate"/>
          </Form.Field>

          <Form.Field >
            <label>End Date</label>
            <input type="date" name="endDate"/>
          </Form.Field>

          <Form.Field >
            <label>Picture</label>
            <input placeholder='URL' name="itemPic"/>
          </Form.Field>

          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions'/>
          </Form.Field>

          <Button type='submit'>Create Auction</Button>
      </Form>

    </div>)
  }
}

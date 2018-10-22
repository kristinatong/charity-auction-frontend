import React from "react"
import {
  Card,
  Grid,
  Image,
  Item,
  Form,
  Button,
  Input,
  Label,
  Table,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

const AuctionCard = (props) => {
  const handleIncremementBid = (event) => {
    event.preventDefault()
    props.handleIncremementBid(event.target.bid.value, props.item)
    event.target.reset()
  }

  const tableRow = (bid) => {
    let createDate = new Date(bid.created_at)
     // debugger



    return (

      <Table.Row key={bid.id}>
      <Table.Cell>
        <Header as='h4' image="image">
          <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded="rounded" size='mini'/>
          <Header.Content>
            {bid.bidder.name}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>${bid.amount}</Table.Cell>
      <Table.Cell>{`${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()} on ${createDate.getMonth()+1}/${createDate.getDate()}/${createDate.getYear()+1900}`}</Table.Cell>
    </Table.Row>)
  }

  const timeRemaining = () => {
    const endDate = new Date(props.item.end_date);
    const dateNow = new Date()
    const timeRemaining = Math.round((endDate - dateNow)/((1000)*(3600)))

    if(timeRemaining > 24){
      const days = Math.round(timeRemaining/24)
      const hours = timeRemaining - (days*24)
      return `${days} days, ${hours} hours`
    }else if(timeRemaining <= 24 && timeRemaining > 1){
      return `${timeRemaining} hours`
    }else{
      return `${timeRemaining*60} minutes`
    }

  }

  const renderTable = () => {
    return (

      <Table color="teal"   celled="celled" collapsing="collapsing">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={3}>Bidder</Table.HeaderCell>
          <Table.HeaderCell width={3}>Amount</Table.HeaderCell>
          <Table.HeaderCell width={3}>Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {props.item.bids.length < 1 ? null: props.item.bids.sort((a,b) => {return b.amount - a.amount}).map(bid => tableRow(bid))}
      </Table.Body>
    </Table>

    )
  }

  const renderForm = () => {
    if(props.item.seller.id !== props.currentUser.id){
      return (<Form onSubmit={handleIncremementBid}>
        <Form.Field>
          <label>Bid</label>
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic="basic">$</Label>
            <Form.Input width={2} name='bid' type='number'/>
          </Input><br/><br/>
          <Button type='submit'>
            Submit
          </Button>
        </Form.Field>
      </Form>)
    }else{
      return(<Button onClick={(event) => props.handleDeleteAuction(event,props.item.id)}>Delete</Button>)
    }
  }

  console.log(props)
  return (<Segment centered='true' color='blue'>
    <Header as='h2' icon="icon" textAlign='center'>
      <Icon name='gavel' circular="circular"/>
      <Header.Content>{props.item.item_name}</Header.Content>
      <Header.Content as="h3" sub>Description: {props.item.item_description}</Header.Content><br/>
      <Header.Content as="h3" textAlign="right" sub>Time Remaining: {timeRemaining()}</Header.Content>
    </Header>
    {renderTable()}
    {renderForm()}
  </Segment>)
}

export default AuctionCard

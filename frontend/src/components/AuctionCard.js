import React from "react"
import { Card, Grid, Image, Item, Form, Button, Input, Label, Table, Header, Icon, Segment } from 'semantic-ui-react'




const AuctionCard = (props) => {
  const handleIncremementBid = (event) => {
    event.preventDefault()
    props.handleIncremementBid(event.target.bid.value,props.item)
    event.target.reset()
  }

  const renderTable = () => {
    return(
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
  }

  console.log(props)
  return(
      <Segment centered color='white'>
       <Header as='h2' icon textAlign='center'>
         <Icon name='gavel' circular />
         <Header.Content>Bids</Header.Content>
       </Header>
    {/* <Card>
      <Card.Header>
      {props.item.item_name}
      </Card.Header>

      <Card.Description>
        {props.item.item_description} */}

        {renderTable()}

        <Form onSubmit={handleIncremementBid}>
          <Form.Field>
            <label>Bid</label>
            <Input labelPosition='right' type='text' placeholder='Amount'>
              <Label basic>$</Label>
              <Form.Input width={2} name='bid' type='number'/>
              {/* <Label>.00</Label> */}
            </Input>
            <Button type='submit'> Submit </Button>
          </Form.Field>
        </Form>
      {/* </Card.Description>
    </Card> */}
</Segment>
  )
}


export default AuctionCard

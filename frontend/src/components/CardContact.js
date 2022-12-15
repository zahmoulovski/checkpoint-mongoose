import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardContact = ({contact}) => {
    return (
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>Name : {contact.name}</Card.Title>
            <Card.Text>
            Description : {contact.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Email : {contact.email}</ListGroup.Item>
            <ListGroup.Item>Age : {contact.age}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Update</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      );
    }

export default CardContact

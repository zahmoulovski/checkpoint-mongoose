import React from "react";
import { Card, Button } from "react-bootstrap";
import { deletContact } from "../api/contact";
import { useNavigate } from "react-router";
const CardContact = ({ contact, getContact }) => {
  let navigate = useNavigate();
  const update = () => {
    navigate(`/update/${contact._id}`);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Button
            onClick={async () => {
              await deletContact(contact._id);
              getContact();
            }}
          >
            Delete
          </Button>
          <Button onClick={() => update()} variant="danger">
            Update
          </Button>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {contact._id}
          </Card.Subtitle>
          <Card.Text>here's some bla bla bla</Card.Text>
          <Card>{contact.age}</Card>
          <Card>{contact.email}</Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContact;

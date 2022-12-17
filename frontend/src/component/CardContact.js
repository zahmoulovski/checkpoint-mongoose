import React from "react";
import { Card, Button } from "react-bootstrap";
import { deleteContact } from "../api/contact";
import { useNavigate } from "react-router";
const CardContact = ({ contact, getContact }) => {
  let navigate = useNavigate();
  const update = () => {
    navigate(`/update/${contact._id}`);
  };

  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>First name : {contact.firstname}</Card.Title>
          <Card.Title>Last name : {contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted prevent">
            ID : {contact._id}
          </Card.Subtitle>
          <Card.Text>Description : {contact.description}</Card.Text>
          <Card>
            Age :{contact.age}
            <br />
            Phone : {contact.phone}
          </Card>
          <Card>E-mail : {contact.email}</Card>
          <div className="btns">
            <Button onClick={() => update()} variant="warning">
              Update
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                await deleteContact(contact._id);
                getContact();
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContact;

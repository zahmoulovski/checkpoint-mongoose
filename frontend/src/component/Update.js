import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { updateCont, GetUniqueContact } from "../api/contact";
import "../App.css";
import Button from "react-bootstrap/Button";

const Update = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getContactbyId = async (contactId) => {
    const data = await GetUniqueContact(contactId);
    setFirstname(data.getuser.firstname);
    setName(data.getuser.name);
    setDescription(data.getuser.description);
    setAge(data.getuser.age);
    setPhone(data.getuser.phone);
    setEmail(data.getuser.email);
  };

  useEffect(() => {
    if (id) {
      getContactbyId(id);
    }
  }, [id]);

  const handleSubmit = async (contactId, newValue) => {
    await updateCont(contactId, newValue);
    navigate("/");
  };

  return (
    <div className="addContainer">
      <form className="addForm">
        <div className="names">
          <label>
            First name:
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="mail">
          <label>
            E-mail:
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="agePhone">
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <label>
          Description:
          <textarea
            row="4"
            cols="50"
            type="textarea"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <Button
          variant="success"
          onClick={() =>
            handleSubmit(id, {
              firstname,
              name,
              description,
              age,
              phone,
              email,
            })
          }
        >
          Update contact
        </Button>
      </form>
    </div>
  );
};

export default Update;

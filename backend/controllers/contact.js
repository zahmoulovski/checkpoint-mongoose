const ContactSchema = require("../model/Contact");

exports.GetContact = async (req, res) => {
  try {
    const Contacts = await ContactSchema.find();
    res.status(200).send({ Contacts, msg: "Here's your list" });
  } catch {
    res.status(500).send("You have no users to show");
  }
};

exports.AddContact = async (req, res) => {
  try {
    const NewContact = new ContactSchema(req.body);
    await NewContact.save();
    res.status(200).send({ NewContact, msg: "Contact have been added" });
  } catch (err) {
    res.status(500).send("Could not add contact!");
  }
};

exports.UpdateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await ContactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send("Contact updated");
  } catch (err) {
    res.status(500).send("Could not update");
  }
};
exports.GetById = async (req, res) => {
  const { id } = req.params;

  try {
    const getuser = await ContactSchema.findById(id);
    res.status(200).send({ getuser });
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not find it");
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const delContact = await ContactSchema.findByIdAndDelete(id);
    res.status(200).send("Contact deleted");
  } catch (err) {
    res.status(500).send("Could not delete it");
  }
};

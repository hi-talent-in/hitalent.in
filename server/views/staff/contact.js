import { Contact } from "../../models/staff.js";
import { User } from "../../models/user.js";

export const contactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  } else {
    Contact.create({
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
      .then(() => res.status(200).json({ message: "Contact sent." }))
      .catch((error) => res.status(400).json({ error: error.message }));
  }
};

export const getContacts = async (req, res) => {
  const userId = req.user.userId;
  await User.findOne({ where: { id: userId } })
    .then(async () => {
      await Contact.findAll()
        .then((contacts) => {
          const contactsList = contacts.map((contact) => {
            const { id, name, email, subject, message, ...rest } = contact;
            return { key: id, name, email, subject, message };
          });
          return res.status(200).json({ contacts: contactsList });
        })
        .catch((r) => res.status(400).json({ message: r.message }));
    })
    .catch((r) => res.status(400).json({ message: r.message }));
};

export const deleteContact = async (req, res) => {
  const userId = req.user.userId;
  const contactId = req.params.contactId;
  await User.findOne({ where: { id: userId } })
    .then(async () => {
      if (contactId) {
        await Contact.destroy({ where: { id: contactId } })
          .then(() => res.status(200).json({ message: "Contact deleted" }))
          .catch((r) => res.status(400).json({ message: r.message }));
      } else {
        return res.status(400).json({ message: "Invalid Contact Id" });
      }
    })
    .catch((r) => res.status(400).json({ message: r.message }));
};

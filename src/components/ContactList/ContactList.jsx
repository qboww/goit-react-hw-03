import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  if (!contacts.length) {
    return (
      <div>
        <h2 className={css.listHeader}>Contacts List</h2>

        <ul className={css.contactsList}>
          <p>No contacts found</p>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2 className={css.listHeader}>Contacts List</h2>
      <ul className={css.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

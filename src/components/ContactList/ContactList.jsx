import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => (
  <div className="sub-card">
    <h2 className={css.listHeader}>Contacts List</h2>
    <ul className={css.contactsList}>
      {contacts.length ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  </div>
);

export default ContactList;

import css from "./Contact.module.css";

export const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;

import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import css from "./Contact.module.css";

export const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <div>
          <p>
            <FaUser className={css.contactIcon} />
            {name}
          </p>
        </div>
        <div>
          <p>
            <FaPhoneAlt className={css.contactIcon} />
            {number}
          </p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;

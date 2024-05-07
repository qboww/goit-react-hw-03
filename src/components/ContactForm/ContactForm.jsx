import { Field, Formik, Form } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";

import css from "./ContactForm.module.css";

const initialValues = {
  id: nanoid(),
  name: "",
  number: "",
};

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <div className={css.contactForm}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" id={nameFieldId} name="name" required placeholder="Enter name" />
          </div>
          <div>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              type="text"
              id={numberFieldId}
              name="number"
              required
              placeholder="Enter phone number"
            />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

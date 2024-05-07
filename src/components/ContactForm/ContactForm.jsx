import { Field, Formik, Form } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} name="name" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormField, Form, ErrorMessage } from './ContactForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().positive('>0').required('Required'),
});
export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

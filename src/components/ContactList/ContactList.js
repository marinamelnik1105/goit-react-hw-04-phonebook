import PropTypes from 'prop-types';
import { ContactData, Item, List } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <ContactData>
          {name}: {number}
        </ContactData>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </Item>
    ))}
  </List>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;

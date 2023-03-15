import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Layout } from "./Layout.styled";
export const App =()=>

{
  const initalContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  const [contacts, setContacts] = useState(() =>
  {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    } return initalContacts;
  });


  const [filter, setFilter] = useState('');
      
  useEffect(()=> { localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])
 const addContacts = newContacts =>
  {
    const repeatCheck = () =>
    {
      return contacts.some(value =>
      {
      return value.name.toLowerCase()=== newContacts.name.toLowerCase()})
    }
    if (repeatCheck()) {
      return alert(`${newContacts.name} is already in contacts.`)
    } else { setContacts(prevState => [...prevState, newContacts])
    }
   
    
  }
 const deleteContacts = contactId =>
  {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };
 const changeFilter = (e) =>
  {
    setFilter(  e.target.value )
  }
 const getVisibleContacts = () =>
  {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
 
    
    const visibleContacts = getVisibleContacts();
  return (
    <Layout>
      <GlobalStyle/>
      <h1>Phonebook</h1>
      <ContactForm onSave={addContacts} />
      <h2>Contacts</h2>
      <Filter FilterValue={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContacts} />  
      
    </Layout>
  );
  
  
}

import { nanoid } from 'nanoid';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';
import { useState, useEffect } from 'react';
export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? []);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  const addContact = (name, number) => {
     const contact = {
    id: nanoid(),
    name: name,
    number: number,
  };
    const nameExists = contacts.some(c => c.name.toLowerCase() === contact.name.toLowerCase());
    if (nameExists) {
      alert(` ${contact.name} is already in your contacts.`);
      return;
    }
    setContacts([...contacts, contact]);
  }

   const changeFilter = value => {
    setFilterValue(value);
  }

   const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));   
  }
  
  const filteredContacts = () => {
    return contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    })
  };

  return (
      <>
        <h2>Phonebook</h2>
        <Form addContact={addContact} />
        <h3>Contacts</h3>
        <Filter onChange={changeFilter} />
        <List contacts={filteredContacts()} handleDelete={handleDelete} />
      </>
    );
  }
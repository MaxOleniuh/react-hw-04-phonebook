import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
    {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (name, number) => {
     const contact = {
    id: nanoid(),
    name: name,
    number: number,
  };
    const nameExists = this.state.contacts.some(c => c.name === contact.name);
    if (nameExists) {
      alert(` ${contact.name} is already in your contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
  }
  filteredContacts() {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
      
    })
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Form
          addContact={this.addContact}
          preventAdditon={this.preventAdditon}
        />
        <h3>Contacts</h3>
        <Filter onChange={this.changeFilter} />
        <List contacts={this.filteredContacts()} handleDelete={this.handleDelete} />
      </>
    );
  }
}

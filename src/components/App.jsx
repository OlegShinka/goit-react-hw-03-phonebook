import React, { Component } from 'react';
import { ContactsList } from './contactsList/contactsList';
import Form from './form/form';
import { Filter } from './filter/filter';

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

  contactByNameSearch = (nameContact, contacts) => {
    return contacts.find(item => {
      return item.name === nameContact;
    });
  };

  formSubmitHandler = newContact => {
    const checkContact = this.state.contacts.find(contact => {
      return contact.name === newContact.name;
    });

    if (checkContact) {
      alert(`${this.state.contacts.name} is already in contacts.`);
      return;
    }
    if (!checkContact) {
      this.setState(prev => ({
        // розпили контакти масив
        contacts: [...prev.contacts, newContact],
      }));
    }
  };
  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  //фу видалення контакту по id
  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== idContact),
    }));
  };

  onContacts = filter => {
    if (filter === '') {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(item => {
        return item.name.includes(filter.toLowerCase());
      });
    }
  };

  render() {
    const { filter } = this.state;

    // const visibleContact = contacts.filter(contact =>
    //   contact.name.includes(filter)
    // );
    return (
      <div>
        <h2> Phonebook</h2>
        <Form onSubmitForm={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactsList
          list={this.onContacts(filter)}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;

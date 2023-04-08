import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import css from './App.module.css';
import { useEffect } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    } else {
      const defaultContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
      setContacts(defaultContacts);
      localStorage.setItem('contacts', JSON.stringify(defaultContacts));
    }
  }, []);

  const addingContact = (name, number) => {
    const contactAlreadyAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactAlreadyAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = nanoid();
    const contact = { id, name, number };
    setContacts([...contacts, contact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  };

  const deletingContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    localStorage.setItem(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const gettingFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = gettingFilteredContacts();

  return (
    <div className={css['container']}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addingContact} />

      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deletingContact} />
    </div>
  );
};

export default App;

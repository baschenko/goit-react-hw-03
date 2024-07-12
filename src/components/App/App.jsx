import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
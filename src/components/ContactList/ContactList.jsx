import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

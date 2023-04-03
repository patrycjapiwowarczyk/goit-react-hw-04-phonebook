import React from "react";
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
    <ul className={css['contact-list']}>
        {contacts.map(({ id, name, number }) => ( 
            <ContactListItem key={id} id={id} name={name} number={number} onDelete={onDelete} />
        ))}
    </ul>
);

export default ContactList;
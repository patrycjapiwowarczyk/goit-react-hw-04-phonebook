import React from "react";
import css from './ContactFilter.module.css';

const ContactFilter = ({ value, onChange }) => (
    <div className={css['filter']}>
        <label className={css['filter__container']}><p>Find contacts by name:</p>
            <input className={css['filter__input']} type="text" value={value} onChange={onChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"></input>
        </label>
    </div>
)

export default ContactFilter;
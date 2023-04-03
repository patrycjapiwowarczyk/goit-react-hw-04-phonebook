import React from "react";
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => (
            <li className={css['contact-list__item']}> 
            <p>
            {name}: {number}
            </p>
            <button className={css['contact-list__button']} type="button" onClick={() => onDelete(id)}><b>X</b></button>
            </li>
        );

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
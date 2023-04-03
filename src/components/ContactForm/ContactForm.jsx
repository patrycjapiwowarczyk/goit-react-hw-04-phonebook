import React, { Component } from "react";
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name:'',
        number:'',
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form className={css['contact-form']} onSubmit={this.handleFormSubmit}>
                    <label className={css['contact-form__item']}>
                        <p>Name:</p>
                        <input className={css['contact-form__input']} type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required value={name} onChange={this.handleInputChange}/>
                    </label>
                    <label className={css['contact-form__item']}>
                        <p>Number:</p>
                        <input className={css['contact-form__input']} type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required value={number} onChange={this.handleInputChange}/>
                    </label>
                    <button className={css['contact-form__button']} type="submit">Add contact</button>
                </form>
            </div>
        );
    }
}




export default ContactForm;
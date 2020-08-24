import React, { Component } from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = { name: "", number: "" };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeNum = (e) => {
    this.setState({ number: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = this.props.contacts;
    const { name } = this.state;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in list`);
    } else {
      this.props.addContact(this.state.name, this.state.number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.submitForm} onSubmit={this.handleSubmit}>
        <span className={style.details}>Name: </span>
        <input type="text" value={name} onChange={this.handleChange}></input>
        <br></br>
        <span className={style.details}>Phone:</span>
        <input
          type="text"
          value={number}
          onChange={this.handleChangeNum}
        ></input>
        <br></br>
        <button
          className={style.addContactBtn}
          onSubmit={this.handleSubmit}
          type="submit"
        >
          {name ? `Add ${name}` : "Add Contact"}
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

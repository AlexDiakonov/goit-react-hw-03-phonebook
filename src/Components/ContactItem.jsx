import React from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";
export default function ContactItem({ name, number, id, onRemove }) {
  return (
    <li>
      <span className={(style.contactName, style.contactDetails)}>
        {name + ":"}
      </span>
      <span className={(style.contactPhone, style.contactDetails)}>
        {number}
      </span>
      <button
        className={style.removeButton}
        type="button"
        onClick={() => onRemove(id)}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onRemove: PropTypes.func,
};

import React from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";
export default function Filter({ handleFilter, filter }) {
  return (
    <form className={style.searchForm}>
      <span className={style.formDescription}>Find contacts by name</span>
      <input
        className={style.searchInput}
        onChange={handleFilter}
        value={filter}
        type="text"
      ></input>
    </form>
  );
}
Filter.propTypes = { handleFilter: PropTypes.func, filter: PropTypes.string };

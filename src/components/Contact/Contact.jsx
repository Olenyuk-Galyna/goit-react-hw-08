import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  // const handleToggle = () => dispatch(toggleCompleted(contact));

  return (
    <div className={css.tumb}>
      <div>
        <div className={css.wraper}>
          <IoPerson />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.wraper}>
          <FaPhone />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;

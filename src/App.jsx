import "./App.css";

import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  return (
    <div className="container">
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

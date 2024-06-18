import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactHeader from "./components/ContactHeader";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <main className="main-container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;

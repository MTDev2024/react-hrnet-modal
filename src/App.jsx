import { useState } from "react";
import Modal from "./components/Modal";
import "./components/Modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Test Modal</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation"
      >
        Employee Created!
      </Modal>
    </div>
  );
}

export default App;

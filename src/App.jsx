import { useState } from "react";
import Modal from "./components/Modal";
import "./components/Modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>modal-mtdev2024 — Demo</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation"
      >
        <p>Employee created successfully!</p>
      </Modal>
    </div>
  );
}

export default App;

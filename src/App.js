import { useState } from "react";
import Modal from "./modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      <button className="btn btn-main center" onClick={handleModalToggle}>
        Open Modal
      </button>
      {showModal && <Modal handleModalToggle={handleModalToggle} />}
    </div>
  );
}

export default App;

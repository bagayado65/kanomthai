import React from "react";
import "./Model-popupStyle.css";

const Model_popup = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button onClick={closeModal}>Close Modal</button>
          {children}
        </div>
      </div>
    );
  };
export default Model_popup;

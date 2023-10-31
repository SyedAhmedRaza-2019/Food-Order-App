import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;

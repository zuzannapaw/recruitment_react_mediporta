//region imports
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

//endregion

//change div refresh to button!

//region component
export const ErrorModal = (props) => {
  const portalDiv = document.getElementById("portal")!;
  const refresh = () => {
    window.location.reload();
  };

  return createPortal(
    <>
      <div className="modal-overlay" />
      <div className="error-modal">
        <div onClick={props.close}>X</div>
        <div className="error-symbol">
          <FontAwesomeIcon icon={faBomb} />
        </div>
        <span style={{ fontWeight: 500 }}>Oops!</span>
        <span className="error-message"> Error: {props.message}</span>
        <div className="refresh" onClick={refresh}>
          Refresh page
        </div>
      </div>
    </>,
    portalDiv
  );
};

//endregion

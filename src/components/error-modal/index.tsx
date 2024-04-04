//region imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { ErrorModalProps } from "../../../utils/types";
//endregion

/**
 * @name ErrorModal
 * @description Modal that is being displayed when an error occurs.
 * @param {ErrorModalProps} props
 * @returns {React.ReactElement}
 * @example
 * <ErrorModal message="An error occured." />
 */

//region component
const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="modal-overlay" />
      <div className="error-modal">
        <div className="error-symbol">
          <FontAwesomeIcon icon={faBomb} size="xl" />
        </div>
        <span className="oops">Oops!</span>
        <span className="error-message"> Error: {props.message}</span>
        <button className="refresh" onClick={refresh}>
          Refresh page
        </button>
      </div>
    </>
  );
};
//endregion

export default ErrorModal;

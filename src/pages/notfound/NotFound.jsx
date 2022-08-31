import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container container-fluid">
      <div className="row">
        <div className="col-md-6 align-self-center text-center">
          <FontAwesomeIcon icon={faExclamationCircle} className="" />
        </div>
        <div className="col-md-6 align-self-center">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <button
            className="btn btn-primary btn-outline-primary"
            onClick={() => navigate("/")}
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}

import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faEarthAmericas} /> Travel-Booking.com
        </Link>
        <div className="nav-items">
          <button className="btn nav-btn">Register</button>
          <button className="btn nav-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

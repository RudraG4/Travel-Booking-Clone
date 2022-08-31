import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./newsletterbanner.css";

export default function NewsLetterBanner() {
  return (
    <div className="newsletter-banner container-fluid">
      <div style={{ minWidth: "75%" }}>
        <h4 className="fw-bold">Subscribe to get amazing deals</h4>
        <p>
          Enter your email and click on sign me up! to avail amazing deals and
          offers
        </p>
        <div className="newsletter-form-wrapper input-group">
          <input
            type="email"
            className="form-control rounded-1"
            name="email"
            placeholder="Enter email"
          />
          <button className="btn btn-primary btn-outline-primary rounded-1">
            Sign me up!
            <FontAwesomeIcon icon={faPaperPlane} className="ps-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

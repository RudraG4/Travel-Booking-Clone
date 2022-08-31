import "./newsletterfooter.css";

export default function NewsLetterFooter() {
  return (
    <div className="container-fluid newsletter-footer">
      <div className="container d-flex flex-column justify-content-center align-items-center pt-3 pb-3">
        <h2 className="fw-light fs-4 mb-0">Save time, save money!</h2>
        <div className="fw-light fs-6 text-white-50 mb-3">
          Sign up and we'll send the best deals to you
        </div>
        <div className="newsletter-footer-form input-group w-100">
          <input
            type="email"
            className="form-control rounded-1"
            name="email"
            placeholder="Enter email"
          />
          <button className="btn btn-primary subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

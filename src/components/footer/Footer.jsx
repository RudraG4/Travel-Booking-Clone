import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container container-fluid">
      <div className="footer_links row">
        <ul className="footer_links-col col">
          <li className="footer-list-item">Countries</li>
          <li className="footer-list-item">Regions</li>
          <li className="footer-list-item">Cities</li>
          <li className="footer-list-item">Districts</li>
          <li className="footer-list-item">Airports</li>
          <li className="footer-list-item">Hotels</li>
          <li className="footer-list-item">Place of Interest</li>
        </ul>
        <ul className="footer_links-col col">
          <li className="footer-list-item">Discover</li>
          <li className="footer-list-item">Reviews</li>
          <li className="footer-list-item">All destinations</li>
          <li className="footer-list-item">Unique places to stay</li>
        </ul>
        <ul className="footer_links-col col">
          <li className="footer-list-item">Homes</li>
          <li className="footer-list-item">Apartments</li>
          <li className="footer-list-item">Resort</li>
          <li className="footer-list-item">Villas</li>
          <li className="footer-list-item">Hostels</li>
          <li className="footer-list-item">B&Bs</li>
          <li className="footer-list-item">Guest Houses</li>
        </ul>
        <ul className="footer_links-col col">
          <li className="footer-list-item">Stays</li>
          <li className="footer-list-item">Flight</li>
          <li className="footer-list-item">Car Rentals</li>
          <li className="footer-list-item">Airport Taxis</li>
        </ul>
        <ul className="footer_links-col col">
          <li className="footer-list-item">About Travel-Booking.com</li>
          <li className="footer-list-item">Customer Service Help</li>
          <li className="footer-list-item">Careers</li>
          <li className="footer-list-item">Terms & Conditions</li>
          <li className="footer-list-item">How We Work</li>
          <li className="footer-list-item">Hotels</li>
          <li className="footer-list-item">Privacy & cookie statement</li>
        </ul>
      </div>
      <p className="mt-3 mb-3 text-center">
        Copyright © 2022 Travel-Booking.com™. All rights reserved. This is a
        Clone of Booking.com
      </p>
    </div>
  );
}

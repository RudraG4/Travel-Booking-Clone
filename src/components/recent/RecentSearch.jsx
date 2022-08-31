import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTreeCity } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../../hooks/UseLocalStorage";
import "./recentsearch.css";

export default function RecentSearch() {
  const [searches] = useLocalStorage("recent-search", []);

  return (
    <div className="recent-search-container">
      {searches.length && (
        <ul className="list-group">
          {searches.map((_rs, _id) => {
            return (
              <li key={_id} className="search-item list-group-item">
                <Link
                  to={`/hotels/searchresults?qs=${btoa(JSON.stringify(_rs))}`}
                >
                  <div className="recent-search-card">
                    <div className="card-icon-container">
                      <FontAwesomeIcon
                        icon={faTreeCity}
                        className="fa-icon text-secondary"
                      />
                    </div>
                    <div className="card-content">
                      <p className="fw-bold">{_rs.destination}</p>
                      <p className="subtitle fs-6">{`${
                        _rs.checkInLabel || ""
                      } - ${_rs.checkOutLabel || ""}`}</p>
                      <p className="subtitle fs-7">{`${_rs.adults} Adults · ${_rs.children} Children · ${_rs.room} Rooms`}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

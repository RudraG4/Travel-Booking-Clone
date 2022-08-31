import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faMountainCity
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();

  const routes = [
    {
      pathname: "/",
      icon: faBed,
      label: "Stays",
      subroutes: ["/hotels"]
    },
    {
      pathname: "/flights",
      icon: faPlane,
      label: "Flights"
    },
    {
      pathname: "/car-rentals",
      icon: faCar,
      label: "Car Rentals"
    },
    {
      pathname: "/attractions",
      icon: faMountainCity,
      label: "Attractions"
    },
    {
      pathname: "/airport-taxis",
      icon: faTaxi,
      label: "Airport Taxis"
    }
  ];

  const setActive = (route) => {
    if (location.pathname === route.pathname) return "active";

    if (
      route.subroutes &&
      route.subroutes.filter((_) => location.pathname.startsWith(_)).length > 0
    ) {
      return "active";
    }
    return "";
  };

  return (
    <div className="header">
      <div className="container-fluid header-container">
        <div className="header-nav-list">
          {routes.map((route, _id) => {
            const className = ` btn header-nav-item ${setActive(route)}`;
            return (
              <NavLink key={_id} to={route.pathname} className={className}>
                <FontAwesomeIcon icon={route.icon} />
                <span>{route.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

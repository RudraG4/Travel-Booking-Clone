import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faXmark } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/UseDebounce";
import { getLocations } from "../../data/locations";
import "./autosuggest.css";

function AutoSuggestPlaceholder() {
  const itemspans = [...Array(5)].map(
    () => 100 + Math.ceil(Math.random() * 100) + 1
  );
  return (
    <ul className="list-group auto-suggest-list-loading">
      {itemspans.map((_w, _id) => {
        return (
          <li key={_id} className="list-group-item list-group-item-action">
            <span
              className="list-group-item-placeholder"
              style={{ width: `${_w}px` }}
            ></span>
          </li>
        );
      })}
    </ul>
  );
}

export default function AutoSuggest(props) {
  const [value, setValue] = useState(props.value || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadSugg, setLoadSugg] = useState(true);
  const debouncedSearchTerm = useDebounce(value, 500);
  const [suggestions, setSuggestions] = useState([]);

  const _getLocations = async (keyword) => {
    setIsLoading(true);
    const locations = await getLocations(keyword);
    setIsLoading(false);
    setSuggestions(locations);
  };

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setValue(value);
    setShowSuggestions(true);
    setLoadSugg(true);
  };

  const handleSuggestionClick = (value) => {
    setValue(value);
    setShowSuggestions(false);
    setLoadSugg(false);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      if (loadSugg) {
        _getLocations(debouncedSearchTerm);
      }
    } else {
      _getLocations();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => props.onChange(value), [value]);

  return (
    <div className="auto-suggest">
      <div className="auto-suggest-input">
        <FontAwesomeIcon icon={faBed} className="fa-icon" />
        <input
          type="text"
          value={value}
          className="form-control"
          placeholder="Where are you going?"
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
        />
        {value && (
          <FontAwesomeIcon
            icon={faXmark}
            className="btn-close fa-icon"
            onClick={() => setValue("")}
          />
        )}
      </div>
      {showSuggestions && (
        <div className="auto-suggest-suggestions">
          {!isLoading && suggestions.length > 0 && (
            <ul className="list-group autocomplete-list-data">
              {suggestions.map((_data, _id) => {
                const dataValue = [_data.location, _data.country].join(", ");
                return (
                  <li
                    key={_id}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleSuggestionClick(dataValue)}
                  >
                    <div className="option-name">{_data.location}</div>
                    <div className="option-sub-name">{_data.country}</div>
                  </li>
                );
              })}
            </ul>
          )}
          {!isLoading && suggestions.length === 0 && (
            <div className="text-center p-2">No Data Available</div>
          )}
          {isLoading && <AutoSuggestPlaceholder />}
        </div>
      )}
    </div>
  );
}

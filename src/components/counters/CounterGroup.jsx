import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./countergroup.css";

function Counter(props) {
  const { label, name, value, min, max, onActionClick } = props;
  return (
    <div className="list-group-item">
      <div className="option-name">{label || name}</div>
      <div className="action">
        <button
          type="button"
          className="btn"
          id={`${name}-decr`}
          disabled={value <= min}
          onClick={() => onActionClick(name, "decr")}
        >
          -
        </button>
        <span className="count">{value}</span>
        <button
          type="button"
          className="btn"
          id={`${name}-incr`}
          disabled={value >= max}
          onClick={() => onActionClick(name, "incr")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CounterGroup(props) {
  const { options: _initOptions = [], onChange } = props;
  const [isCounterOpen, setIsCounterOpen] = useState(false);
  const [options, setOptions] = useState(_initOptions);

  function handleCounterClick() {
    setIsCounterOpen(!isCounterOpen);
  }

  function handleActionClick(option, action) {
    setOptions((_oldOptions) => {
      return _oldOptions.map((_option) => {
        if (_option["name"] === option) {
          if (action === "decr") {
            if (_option["value"] > 0) {
              _option["value"] = _option["value"] - 1;
            }
          } else {
            _option["value"] = _option["value"] + 1;
          }
        }
        return _option;
      });
    });
  }

  useEffect(() => {
    onChange && onChange(options);
  }, [options, onChange]);

  return (
    <>
      <div className="counter-group" onClick={handleCounterClick}>
        <FontAwesomeIcon icon={faUser} className="fa-icon" />
        <div className="counter-group-input">
          {options.map((cu) => `${cu["value"]} ${cu["label"]}`).join(" · ")}
        </div>
        <div className="counter-group-arrow">
          <FontAwesomeIcon icon={faAngleUp} className="fa-icon" />
          <FontAwesomeIcon icon={faAngleDown} className="fa-icon" />
        </div>
      </div>
      {isCounterOpen && (
        <div className="counter-options">
          <div className="list-group">
            {options.map((option, id) => {
              return (
                <Counter
                  key={id}
                  {...option}
                  onActionClick={handleActionClick}
                />
              );
            })}
            {!options.length && (
              <span className="text-center">No Data Available</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

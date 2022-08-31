import "./searchbox.css";
import { useState } from "react";
import CounterGroup from "../counters/CounterGroup";
import DateRangePicker from "../daterangepicker/DateRangePicker";
import AutoSuggest from "../autosuggest/AutoSuggest";
import useLocalStorage from "../../hooks/UseLocalStorage";
import { addDays, format } from "date-fns";

export default function SearchBox(props) {
  const dateDisplayFormat = "MMM dd, yyyy EE";
  const dateValueFormat = "yyyy-MM-dd HH:mm:ss";

  const { query, onSubmit, searchType } = props;
  const { children = 0, adults = 1, room = 1 } = query;
  const { checkInDate: startDate, checkOutDate: endDate } = query;

  const [destination, setDestination] = useState(query.destination);
  const [dateRange, setDateRange] = useState(() =>
    setOrGetDefault(startDate, endDate)
  );
  const [options, setOptions] = useState([
    { min: 1, max: 30, name: "adults", label: "Adults", value: adults },
    { min: 0, max: 10, name: "children", label: "Children", value: children },
    { min: 1, max: 30, name: "room", label: "Rooms", value: room }
  ]);
  const [error, setError] = useState();
  const [recentSearch, setRecentSearch] = useLocalStorage("recent-search", []);

  function setOrGetDefault(startDate, endDate) {
    let _startDate = startDate ? new Date(startDate) : new Date();
    let _endDate = endDate ? new Date(endDate) : addDays(new Date(), 5);

    _startDate.setHours(0, 0, 0);
    _startDate = format(_startDate, dateValueFormat);

    _endDate.setHours(0, 0, 0);
    _endDate = format(_endDate, dateValueFormat);

    return { startDate: _startDate, endDate: _endDate };
  }

  const onRangeChange = ({ startDate, endDate }) => {
    setDateRange(setOrGetDefault(startDate, endDate));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setError();
    if (!searchType) return;

    let searchObj = {};
    if (searchType === "stays") {
      if (!destination) {
        setError("Enter a destination to start searching.");
        return false;
      }

      searchObj = {
        searchType,
        destination,
        checkInDate: dateRange.startDate,
        checkOutDate: dateRange.endDate,
        checkInLabel: format(new Date(dateRange.startDate), dateDisplayFormat),
        checkOutLabel: format(new Date(dateRange.endDate), dateDisplayFormat)
      };

      options.map((_op) => {
        searchObj[_op["name"]] = _op["value"];
        return _op;
      });

      const predicate = (_) => JSON.stringify(searchObj) === JSON.stringify(_);
      if (recentSearch.findIndex(predicate) < 0) {
        recentSearch.unshift(searchObj);
        setRecentSearch(recentSearch.splice(0, 3));
      }
    }
    onSubmit(searchObj);
  };

  return (
    <div className="search-container">
      <form
        className="search-box needs-validation"
        onSubmit={handleSearch}
        noValidate
      >
        {searchType === "stays" && (
          <>
            <div className="search-box-item">
              <AutoSuggest
                value={destination}
                onChange={(data) => {
                  setError();
                  setDestination(data);
                }}
              />
              {error && <div className="is-error">{error}</div>}
            </div>
            <div className="search-box-item">
              <DateRangePicker
                dateRange={dateRange}
                dateValueFormat={dateValueFormat}
                dateDisplayFormat={dateDisplayFormat}
                fromLabel="Check-In Date"
                toLabel="Check-Out Date"
                onChange={onRangeChange}
              />
            </div>
            <div className="search-box-item">
              <CounterGroup options={options} onChange={setOptions} />
            </div>
          </>
        )}
        <div className="search-box-item">
          <div className="search-box-buttons">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

SearchBox.defaultProps = {
  query: { children: 0, adults: 1, room: 1 },
  onSubmit: (data) => {}
};

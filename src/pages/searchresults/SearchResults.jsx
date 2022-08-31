import { SearchBox } from "../../components";
import SearchItem from "./SearchItem";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/UseQuery";
import { getHotels } from "../../data/hotels";
import "./searchresults.css";

export default function SearchResults(props) {
  const queryParams = useQuery(); // Custom hook to parse URL Query Params
  const navigate = useNavigate(); // To change location
  const qsParam = queryParams.has("qs")
    ? JSON.parse(atob(queryParams.get("qs")))
    : {};
  const [query, setQuery] = useState(qsParam);
  const [results, setResults] = useState([]);

  const onSubmitHandler = function (queryData) {
    setQuery(queryData);
    const navigateOption = { state: queryData };
    navigate(
      `/hotels/searchresults?qs=${btoa(JSON.stringify(queryData))}`,
      navigateOption
    );
  };

  const onClickHandler = (id) => {
    navigate(`/hotels/${id}?qs=` + btoa(JSON.stringify(query)), {
      state: query
    });
  };

  useEffect(() => {
    const _getHotels = async () => {
      const _hotels = await getHotels();
      setResults(_hotels);
    };
    _getHotels();
  }, [query]);

  return (
    <>
      <div className="search-header">
        <div className="container-fluid">
          <SearchBox
            searchType="stays"
            query={query}
            onSubmit={onSubmitHandler}
          />
        </div>
      </div>
      <div className="list-container">
        <div className="list-wrapper">
          <div className="search-results">
            <header className="search-results-header">
              <h2 className="fw-bold">{`Showing Properties in ${
                query.destination || ""
              }`}</h2>
              <div className="d-flex align-items-center">
                <div className="fw-bold d-flex align-items-center gap-1">
                  <label className="fw-bold">Sort-By:</label>
                  <div className="fw-bold">Popularity</div>
                </div>
              </div>
            </header>
            {results.map((cur, _id) => (
              <SearchItem
                key={_id}
                data={cur}
                onClick={() => onClickHandler(cur._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

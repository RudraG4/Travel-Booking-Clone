import {
  Featured,
  Slider,
  HomeRatingCard,
  NewsLetterBanner,
  SearchBox,
  RecentSearch
} from "../../components";
import properties from "../../data/properties.js";
import popularLocationIndia from "../../data/popularLocationIndia";
import homes from "../../data/homes";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/UseLocalStorage";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const [searches] = useLocalStorage("recent-search", []);

  const _search = (queryData) => {
    navigate("/hotels/searchresults?qs=" + btoa(JSON.stringify(queryData)), {
      state: queryData
    });
  };

  const onSubmitHandler = (queryData) => {
    _search(queryData);
  };

  const onLocationCardClick = (location) => {
    const queryData = { destination: location };
    _search(queryData);
  };

  return (
    <div>
      <div className="home-header">
        <div className="container-fluid">
          <div className="hero-container">
            <h1 className="header-title">Find your next stay</h1>
            <h4 className="header-desc">
              Search deals on hotels, homes, and much more...
            </h4>
            <button className="btn btn-primary header-btn">
              Sign In / Register
            </button>
          </div>
          <SearchBox searchType="stays" onSubmit={onSubmitHandler} />
        </div>
      </div>
      <div className="container home-container">
        {searches.length > 0 ? (
          <section>
            <div className="home-section-header">
              <h3 className="fw-bold">Your recent searches</h3>
            </div>
            <RecentSearch />
          </section>
        ) : (
          ""
        )}
        <section>
          <div className="home-section-header">
            <h3 className="fw-bold">Explore popular locations in India</h3>
            <p>These popular destination have lot to offer</p>
          </div>
          <Slider serviceUrl={popularLocationIndia} cardSize="small">
            <Slider.SliderCard onClick={onLocationCardClick} />
          </Slider>
        </section>

        <section>
          <Featured />
        </section>

        <section>
          <NewsLetterBanner />
        </section>

        <section>
          <div className="home-section-header">
            <h3 className="fw-bold">Browse by property type</h3>
          </div>
          <Slider serviceUrl={properties}>
            <Slider.SliderCard />
          </Slider>
        </section>

        <section>
          <div className="home-section-header">
            <h3 className="fw-bold">Home guests love</h3>
          </div>
          <Slider serviceUrl={homes}>
            <HomeRatingCard />
          </Slider>
        </section>
      </div>
    </div>
  );
}

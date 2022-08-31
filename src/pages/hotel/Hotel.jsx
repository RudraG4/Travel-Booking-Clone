import { SearchBox } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLocationDot,
  faMedal,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useQuery from "../../hooks/UseQuery";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getHotel } from "../../data/hotels";
import "./hotel.css";

export default function Hotel(props) {
  const { id } = useParams(); // Retrieve URL Path Params
  const queryParams = useQuery(); // Custom hook to parse URL Query Params
  const navigate = useNavigate(); // To change location
  const qsParam = queryParams.has("qs")
    ? JSON.parse(atob(queryParams.get("qs")))
    : {};
  const [query, setQuery] = useState(qsParam);
  const [hotelDetail, setHotelDetail] = useState();

  const onSubmitHandler = function (queryData) {
    setQuery(queryData);
    const navigateOption = { state: queryData };
    navigate(
      "/hotels/searchresults?qs=" + btoa(JSON.stringify(queryData)),
      navigateOption
    );
  };

  useEffect(() => {
    async function _getHotel() {
      const hotel = await getHotel(id);
      setHotelDetail(hotel);
    }

    _getHotel();
  }, [id]);

  return (
    <>
      <div className="hotel-header">
        <div className="container-fluid">
          <SearchBox
            searchType="stays"
            query={query}
            onSubmit={onSubmitHandler}
          />
        </div>
      </div>
      <div className="hotel-details-container mb-5">
        <div className="hotel-container">
          {hotelDetail && (
            <>
              <div className="hotel-base-container d-flex flex-row gap-2 mt-3 mb-3">
                <div className="hotel-base-left">
                  {hotelDetail.images && (
                    <div className="hotel-img-wrap mb-3">
                      <img
                        src={hotelDetail.images.picture_url}
                        alt={hotelDetail.name}
                      />
                    </div>
                  )}
                  <div className="hotel-title-group flex-grow-1 mb-3">
                    <h3 className="hotel-title fw-bold mb-1">
                      {hotelDetail.name}
                    </h3>
                    <div className="d-flex flex-row align-items-center gap-3 mb-2">
                      {hotelDetail.address && (
                        <div className="hotel-location fw-bold">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="me-2"
                          />
                          <span>{hotelDetail.address.street}</span>
                        </div>
                      )}
                      <div className="hotel-star-ratings">
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#feb139"
                          className="hotel-star-rate"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#feb139"
                          className="hotel-star-rate"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#feb139"
                          className="hotel-star-rate"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#feb139"
                          className="hotel-star-rate"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          color="#feb139"
                          className="hotel-star-rate"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                      <div className="d-flex flex-column flex-grow-1 flex-shrink-0">
                        {hotelDetail.host && (
                          <p className="fw-bold fs-5 m-0">{`Hosted by ${hotelDetail.host.host_name}`}</p>
                        )}
                        <p className="fs-6 m-0 text-secondary">
                          {hotelDetail.guests_included && (
                            <>
                              <span>{`${hotelDetail.guests_included} guests`}</span>
                              <span> · </span>{" "}
                            </>
                          )}
                          {hotelDetail.bedrooms && (
                            <>
                              <span>{`${hotelDetail.bedrooms} bedrooms`}</span>
                              <span> · </span>
                            </>
                          )}
                          {hotelDetail.beds && (
                            <>
                              <span>{`${hotelDetail.beds} beds`}</span>
                              <span> · </span>
                            </>
                          )}
                          {hotelDetail.bathrooms && (
                            <span>{`${hotelDetail.bathrooms} bathrooms`}</span>
                          )}
                        </p>
                      </div>
                      {hotelDetail.host && (
                        <div className="host-img-wrap">
                          <img
                            src={hotelDetail.host.host_thumbnail_url}
                            alt="Host"
                            className="rounded-5"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hotel-base-right">
                  <div className="hotel-baseright-sticky d-flex flex-row flex-wrap gap-2">
                    <div className="hotel-roomdetail-card">
                      <div className="p-3 flex-grow-1">
                        <p className="fw-bold m-0">{hotelDetail.room_type}</p>
                        <div className="d-flex flex-wrap gap-2">
                          <div className="roomdetailcard-left">
                            <div className="fw-bold fs-7 text-secondary">
                              For 2 Adults & 1 Child
                            </div>
                            <div className="s-item-cancellation-policy">
                              {`Cancellation Policy: `}
                              <span className="text-uppercase">
                                {hotelDetail.cancellation_policy}
                              </span>
                            </div>
                          </div>
                          <div className="roomdetailcard-right">
                            <div className="fs-7 text-secondary lh-1">
                              Per Night
                            </div>
                            <div className="fs-4 fw-bold m-0">{`Rs. ${
                              hotelDetail.price * 80
                            }`}</div>
                            <div className="fs-7 text-secondary lh-1">
                              +Rs. 2684 taxes & fees
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hotel-roomdetail-card-footer">
                        <button className="btn btn-primary rounded-5 fw-bold lh-m">
                          BOOK THIS NOW
                        </button>
                      </div>
                    </div>
                    <div className="hotel-roomrating-card">
                      <div className="hotel-rating-card">
                        <div className="d-flex flex-row gap-3">
                          <div className="hotel-rating-card-rating">
                            <span className="fw-bolder fs-4 lh-1">
                              {hotelDetail.review_scores.review_scores_value}
                            </span>
                            <span className="fs-6 lh-1 ms-1 mt-1">/ 10</span>
                          </div>
                          <div className="flex-grow-1 text-end lh-sm">
                            <div className="fs-5 fw-bold">Very Good</div>
                            <div className="fw-bold lh-1 text-secondary">
                              {`${hotelDetail.review_scores.review_scores_rating} Ratings`}
                            </div>
                          </div>
                        </div>
                        <div className="text-primary fs-6 fw-bold mt-3">
                          READ ALL REVIEWS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotel-main-container">
                <section className="hotel-section border-bottom">
                  <div className="mb-3">
                    <p className="fw-bold fs-5 mb-1">OVERVIEW</p>
                    <p className="hotel-description mb-1">
                      {hotelDetail.description}
                    </p>
                  </div>
                </section>
                <section className="hotel-section border-bottom">
                  <div className="mb-3">
                    <p className="fw-bold fs-5 mb-1">LOCATION</p>
                    <p className="hotel-location mb-2">
                      {`The Location of ${hotelDetail.name} has been rated ${hotelDetail.review_scores.review_scores_location}`}
                    </p>
                    <div>
                      {hotelDetail.neighborhood_overview && (
                        <div className="mb-2">
                          <p className="fw-bold fs-'6' mb-1">
                            Neighbourhood Overview
                          </p>
                          <p className="hotel-neighbourhood mb-1">
                            {hotelDetail.neighborhood_overview}
                          </p>
                        </div>
                      )}
                      {hotelDetail.transit && (
                        <div>
                          <p className="fw-bold fs-6 mb-1">Transit</p>
                          <p className="hotel-transit mb-1">
                            {hotelDetail.transit}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                <section className="hotel-section border-bottom">
                  <div className="mb-3">
                    <p className="fw-bold fs-5 mb-1">AMENITIES</p>
                    <ul className="hotel-amenities d-flex flex-wrap">
                      {hotelDetail.amenities.map((_data, _id) => {
                        return (
                          <li
                            className="col-6 col-sm-4 col-md-4 col-lg-4 mb-1 flex-grow-0 flex-shrink-0 pe-4"
                            key={_id}
                          >
                            {_data}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
                <section className="hotel-section border-bottom">
                  <div className="mb-3">
                    <p className="fw-bold fs-5 mb-1">THINGS TO KNOW</p>
                    <div className="col">
                      {hotelDetail.house_rules && (
                        <div className="row mb-1">
                          <p className="fw-bold mb-1">House Rules</p>
                          <p className="mb-1">{hotelDetail.house_rules}</p>
                        </div>
                      )}
                      {hotelDetail.cancellation_policy && (
                        <div className="row mb-1">
                          <p className="fw-bold mb-1">Cancellation policy</p>
                          <p className="mb-1 text-uppercase">
                            {hotelDetail.cancellation_policy}
                          </p>
                        </div>
                      )}
                      {hotelDetail.notes && (
                        <div className="row mb-1">
                          <p className="fw-bold mb-1">Notes</p>
                          <p className="mb-1">{hotelDetail.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                <section className="hotel-section border-bottom">
                  <div className="mb-3">
                    <p className="fw-bold fs-5 mb-1">USER RATINGS & REVIEWS</p>
                    <div className="d-flex flex-row gap-3">
                      <div className="hotel-rating-card-rating">
                        <span className="fw-bolder fs-4 lh-1">
                          {hotelDetail.review_scores.review_scores_value}
                        </span>
                        <span className="fs-6 lh-1 ms-1 mt-1">/ 10</span>
                      </div>
                      <div className="text-start d-flex flex-column">
                        <p className="fs-6 fw-bold m-0 text-uppercase">
                          Very Good
                        </p>
                        <p className="fs-7">
                          <span>
                            <span className="fw-bold">
                              {hotelDetail.number_of_reviews}
                            </span>
                            {` User Reviews`}
                          </span>
                          <span> and </span>
                          <span>
                            <span className="fw-bold">
                              {hotelDetail.review_scores.review_scores_rating}
                            </span>
                            {` Ratings`}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                {hotelDetail.host && (
                  <section className="hotel-section">
                    <div className="mb-3">
                      <div className="host_header mb-3">
                        <div className="d-flex flex-row align-items-center gap-3">
                          <div className="host_img_wrap position-relative">
                            {hotelDetail.host.host_has_profile_pic && (
                              <img
                                src={hotelDetail.host.host_thumbnail_url}
                                alt={hotelDetail.host.host_name}
                                className="rounded-5"
                                width="60"
                                height="60"
                              />
                            )}
                            {hotelDetail.host.host_is_superhost && (
                              <FontAwesomeIcon
                                icon={faMedal}
                                style={{
                                  bottom: "0px",
                                  right: "-8px",
                                  color: "#ffbe05"
                                }}
                                className="position-absolute fs-5"
                              />
                            )}
                          </div>
                          <h3 className="fw-bold">{`Hosted by ${hotelDetail.host.host_name}`}</h3>
                        </div>
                      </div>
                      <div className="host_badges mb-4">
                        <div className="d-flex flex-row align-items-center gap-3">
                          {hotelDetail.host.host_total_reviews > 0 && (
                            <div className="host_reviews">
                              <FontAwesomeIcon icon={faStar} className="me-2" />
                              <span>{`${hotelDetail.host.host_total_reviews} Reviews`}</span>
                            </div>
                          )}
                          {hotelDetail.host.host_identity_verified && (
                            <div className="host_verified">
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="me-2"
                              />
                              <span>Identity Verified</span>
                            </div>
                          )}
                          {hotelDetail.host.host_is_superhost && (
                            <div className="host_superhost">
                              <FontAwesomeIcon
                                icon={faMedal}
                                className="me-2"
                              />
                              <span>Superhost</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {hotelDetail.host.host_is_superhost && (
                        <div className="host_superhost mb-3">
                          <p className="fw-bold mb-1">{`${hotelDetail.host.host_name} is a Superhost`}</p>
                          <p>
                            Superhosts are experienced, highly rated hosts who
                            are committed to providing great stays for guests.
                          </p>
                        </div>
                      )}
                      {hotelDetail.host.host_response_rate && (
                        <div className="host_response mb-4">
                          <p>{`Response rate: ${hotelDetail.host.host_response_rate}%`}</p>
                          <p>{`Response time: ${hotelDetail.host.host_response_time}`}</p>
                        </div>
                      )}
                      <button className="btn btn-primary btn-outline-primary btn-lg fs-5">
                        Contact host
                      </button>
                    </div>
                  </section>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

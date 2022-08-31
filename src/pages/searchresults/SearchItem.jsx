import "./searchitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SearchItem(props) {
  const { data = {} } = props;

  return (
    <div className="s-item" onClick={props.onClick}>
      <div className="s-item-wrap">
        <div className="s-item-img-wrap">
          <img
            src={data.images.picture_url}
            alt="Hotel"
            width={200}
            height={200}
          />
        </div>
        <div className="s-item-details">
          <div className="d-flex flex-row flex-wrap gap-2">
            <div className="s-item-title-group flex-grow-1 ">
              <h3 className="s-item-title fw-bold m-0">{data.name}</h3>
              <div className="s-item-star-ratings">
                <FontAwesomeIcon
                  icon={faStar}
                  color="#feb139"
                  className="s-item-star-rate"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="#feb139"
                  className="s-item-star-rate"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="#feb139"
                  className="s-item-star-rate"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="#feb139"
                  className="s-item-star-rate"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color="#feb139"
                  className="s-item-star-rate"
                />
              </div>
            </div>
            <div className="s-item-rating-group">
              <div className="s-item-review">
                <div className="s-item-review_word">Wonderful</div>
                <div className="s-item-review_count">{`${data.number_of_reviews} reviews`}</div>
              </div>
              <div className="s-item-rating">
                {data.review_scores.review_scores_value}
              </div>
            </div>
          </div>
          <div className="s-item-main">
            <p className="s-item-location m-0 text-secondary">
              {data.address.street}
            </p>
            <p className="s-item-room-type fw-bold mb-1">{data.room_type}</p>
            <p className="s-item-summary">{data.summary}</p>
            <div className="s-item-cancellation-policy">
              {`Cancellation Policy: `}
              <span className="text-uppercase">{data.cancellation_policy}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="s-item-price-group">
        <h3 className="s-item-price fw-bold m-0">Rs. {data.price * 80}</h3>
        <p className="s-item-gray-text">+ taxes & fees</p>
        <p
          style={{
            color: "#666565",
            fontSize: "10px",
            fontWeight: 300,
            lineHeight: 1,
            margin: 0
          }}
        >
          Per Night
        </p>
      </div>
    </div>
  );
}

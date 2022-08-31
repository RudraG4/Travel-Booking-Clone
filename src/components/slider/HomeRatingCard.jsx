import { forwardRef } from "react";
import "./homeratingcard.css";

const HomeRatingCard = forwardRef(function HomeRatingCard(props, ref) {
  const {
    image,
    name,
    city,
    review_score,
    review_score_word,
    review_count,
    currency,
    price
  } = props;

  const homePrice =
    currency && price !== undefined ? `Starting from ${currency} ${price}` : "";

  return (
    <li className="slider-item" ref={ref}>
      <div className="slider-img-container">
        <img className="slider-img" src={image} alt={name} />
      </div>
      <div className="slider-descr">
        <p className="slider-name">{name}</p>
        <p className="slider-city mb-2">{city}</p>
        <p className="slider-price mb-1">{homePrice}</p>
        <div className="slider-ratings">
          <span className="slider-rating">{review_score}</span>
          <div className="slider-review">
            <span className="review_word">{review_score_word}</span>
            <span className="review_count">{`${
              review_count !== undefined ? ` · ${review_count} reviews` : ""
            }`}</span>
          </div>
        </div>
      </div>
    </li>
  );
});

export default HomeRatingCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  useState,
  createRef,
  forwardRef,
  useEffect,
  createContext,
  useContext,
  useRef,
  cloneElement
} from "react";
import useWindowSize from "../../hooks/UseWindowSize";
import "./slider.css";

const SliderContext = createContext();

const SliderCard = forwardRef(function SliderCard(props, ref) {
  const { image, title, subtitle, label, onClick = () => {} } = props;

  return (
    <li className="slider-item" ref={ref} onClick={() => onClick(label)}>
      <div className="slider-img-container">
        <img className="slider-img" src={image} alt={title} loading="lazy" />
      </div>
      <div className="slider-descr">
        <h4 className="slider-type">{title}</h4>
        <p className="slider-count">{subtitle}</p>
      </div>
    </li>
  );
});

const SliderControl = function SliderControl(props) {
  const { controlType } = props;
  const { current, itemRefs, containerRef, scroll } = useContext(SliderContext);
  const [isShow, setIsShow] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const timerRef = setTimeout(() => {
      if (controlType === "prev") {
        setIsShow(current > 0);
      }
      if (controlType === "next") {
        const itemsWidth = itemRefs
          .slice(current, itemRefs.length)
          .reduce((_acc, _ref) => {
            if (_ref.current) {
              _acc += _ref.current.clientWidth;
            }
            return _acc;
          }, 0);
        setIsShow(itemsWidth > containerRef.current.clientWidth);
      }
    }, 300);
    return () => clearTimeout(timerRef);
  }, [current, itemRefs, containerRef, windowSize.width, controlType]);

  return (
    <button
      className={`btn slider-controller${isShow ? " is-show" : ""}`}
      onClick={() => scroll(controlType)}
    >
      <FontAwesomeIcon
        icon={controlType === "prev" ? faAngleLeft : faAngleRight}
      />
    </button>
  );
};

function Slider(props) {
  const { serviceUrl, cardSize = "medium" } = props;
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState([]);
  const [itemRefs, setItemRefs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef();

  function scroll(dir) {
    setCurrent((_currentItem) => {
      let _index = dir === "next" ? _currentItem + 1 : _currentItem - 1;
      _index = Math.max(0, Math.min(_index, items.length - 1));
      const item = itemRefs[_index].current;
      item &&
        containerRef &&
        containerRef.current.scrollTo({
          left: item.offsetLeft,
          behaviour: "smooth"
        });
      return _index;
    });
  }

  useEffect(() => {
    if (typeof serviceUrl === "function") {
      async function getData() {
        setIsLoading(true);
        const properties = await serviceUrl();
        setItems(properties);
        setIsLoading(false);
      }
      getData();
    }
  }, [serviceUrl]);

  useEffect(() => {
    setItemRefs((_oldItemRef) =>
      [...Array(items.length)].map((_, i) => _oldItemRef[i] || createRef())
    );
  }, [items.length]);

  const sliderClassSize = `${
    cardSize === "small" ? "small" : cardSize === "large" ? "large" : "medium"
  }`;

  return (
    <SliderContext.Provider
      value={{ scroll, current, items, containerRef, itemRefs }}
    >
      <div className="slider">
        {props.children && (
          <>
            {isLoading && (
              <ul className={`slider-list slider-${sliderClassSize} skeleton`}>
                {Array(6)
                  .fill()
                  .map((_, _i) => {
                    return (
                      <li key={_i} className="slider-item slider-item-skeleton">
                        <div className="slider-img-container"></div>
                        <div className="slider-descr">
                          <div
                            className="slider-type"
                            style={{ width: "120px" }}
                          ></div>
                          <div
                            className="slider-count"
                            style={{ width: "90px" }}
                          ></div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            )}
            {!isLoading && (
              <>
                <ul
                  className={`slider-list slider-${sliderClassSize}`}
                  ref={containerRef}
                >
                  {items.map((_item, _i) => {
                    return cloneElement(props.children, {
                      key: _i,
                      ..._item,
                      ref: itemRefs[_i]
                    });
                  })}
                </ul>
                {items.length > 0 && (
                  <div className="slider_controllers">
                    <SliderControl controlType="prev" />
                    <SliderControl controlType="next" />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </SliderContext.Provider>
  );
}

Slider.SliderCard = SliderCard;
export default Slider;

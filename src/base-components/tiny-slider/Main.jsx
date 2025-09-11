import { createRef, useRef, useEffect } from "react";
import { init, reInit } from "./index";
import PropTypes from "prop-types";

function TinySlider({ options = {}, getRef = () => {}, className = "", children }) {
  const initialRender = useRef(true);
  const sliderRef = createRef();

  useEffect(() => {
    getRef(sliderRef.current);

    if (initialRender.current) {
      init(sliderRef.current, { options, children });
      initialRender.current = false;
    } else {
      reInit(sliderRef.current);
    }
  }, [options, children, getRef]);

  return (
    <div ref={sliderRef} className={`tiny-slider ${className}`}>
      {children}
    </div>
  );
}

TinySlider.propTypes = {
  options: PropTypes.object,
  getRef: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TinySlider;

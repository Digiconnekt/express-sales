import { createRef, useRef, useEffect } from "react";
import { init, reInit } from "./tiny-slider";

import clsx from "clsx";

function TinySlider(props) {
  const initialRender = useRef(true);
  const sliderRef = createRef();

  useEffect(() => {
    if (sliderRef.current) {
      props.getRef(sliderRef.current);

      if (initialRender.current) {
        init(sliderRef.current, props);
        initialRender.current = false;
      } else {
        reInit(sliderRef.current);
      }
    }
  }, [props.options, props.children]);

  return (
    <div ref={sliderRef} className={clsx(["tiny-slider", props.className])}>
      {props.children}
    </div>
  );
}

TinySlider.defaultProps = {
  options: {},
  getRef: () => {},
  className: "",
};

export default TinySlider;

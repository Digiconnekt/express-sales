import React, { useRef, useEffect } from "react";
import Tippy from "../../base-components/Tippy";

const toggleTooltip = (el) => {
  if (window.innerWidth <= 1260) {
    el._tippy?.enable();
  } else {
    el._tippy?.disable();
  }
};

const initTooltipEvent = (tippyRef) => {
  window.addEventListener("resize", () => {
    toggleTooltip(tippyRef);
  });
};

const Main = (props) => {
  const tippyRef = useRef();
  const Component = props.as || "a";

  useEffect(() => {
    if (tippyRef.current !== undefined) {
      toggleTooltip(tippyRef.current);
      initTooltipEvent(tippyRef.current);
    }
  }, [tippyRef.current]);

  const { as, ...computedProps } = props;
  return (
    <Tippy
      {...computedProps}
      as={Component}
      content={props.content}
      options={{
        placement: "left",
      }}
      getRef={(el) => {
        if (el !== null) {
          tippyRef.current = el;
        }
      }}
    >
      {props.children}
    </Tippy>
  );
};

export default Main;

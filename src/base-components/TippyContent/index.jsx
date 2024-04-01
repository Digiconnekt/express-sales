import { createRef, useEffect } from "react";
import tippy, { roundArrow, animateFill as animateFillPlugin } from "tippy.js";

const init = (el, props) => {
  tippy(`[data-tooltip="${props.to}"]`, {
    plugins: [animateFillPlugin],
    content: el,
    allowHTML: true,
    arrow: roundArrow,
    popperOptions: {
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
          },
        },
      ],
    },
    animateFill: false,
    animation: "shift-away",
    theme: "light",
    trigger: "click",
    ...props.options,
  });
};

function TippyContent(props) {
  const tippyRef = createRef();

  useEffect(() => {
    if (props.getRef) {
      props.getRef(tippyRef.current);
    }

    if (tippyRef.current !== null) {
      init(tippyRef.current, props);
    }
  }, [props.children]);

  const { to, options, getRef, ...computedProps } = props;
  return (
    <div {...computedProps} ref={tippyRef}>
      {props.children}
    </div>
  );
}

export default TippyContent;

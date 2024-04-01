import { useRef, createRef, useEffect } from "react";
import { init, reInit } from "./notification";
import clsx from "clsx";

function Notification(props) {
  const initialRender = useRef(true);
  const toastifyRef = createRef();

  useEffect(() => {
    if (toastifyRef.current) {
      if (initialRender.current) {
        props.getRef(toastifyRef.current);
        init(toastifyRef.current, props);
        initialRender.current = false;
      } else {
        reInit(toastifyRef.current);
      }
    }
  }, [props.options, props.children]);

  const { options, getRef, ...computedProps } = props;
  return (
    <div
      {...computedProps}
      className={clsx([
        "py-5 pl-5 pr-14 bg-white border border-slate-200/60 rounded-lg shadow-xl dark:bg-darkmode-600 dark:text-slate-300 dark:border-darkmode-600 hidden",
        props.className,
      ])}
      ref={toastifyRef}
    >
      {props.children}
    </div>
  );
}

Notification.defaultProps = {
  className: "",
  options: {},
  getRef: () => {},
};

export default Notification;

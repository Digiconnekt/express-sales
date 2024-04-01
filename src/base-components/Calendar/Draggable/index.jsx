import { createRef, useEffect } from "react";
import { Draggable as FullCalendarDraggable } from "@fullcalendar/interaction";

const init = (el, props) => {
  new FullCalendarDraggable(el, props.options);
};

function Draggable(props) {
  const draggableRef = createRef();

  useEffect(() => {
    if (draggableRef.current) {
      init(draggableRef.current, props);
    }
  }, [props.options]);

  return (
    <div ref={draggableRef} {...props}>
      {props.children}
    </div>
  );
}

Draggable.defaultProps = {
  options: {},
};

export default Draggable;

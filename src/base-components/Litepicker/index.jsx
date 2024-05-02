import { createRef, useEffect, useRef } from "react";
import { setValue, init, reInit } from "./litepicker";
import { FormInput } from "../Form";

function Litepicker(props) {
  const initialRender = useRef(true);
  const litepickerRef = createRef();
  const tempValue = useRef(props.value);

  useEffect(() => {
    if (litepickerRef.current) {
      props.getRef(litepickerRef.current);
    }

    if (initialRender.current) {
      setValue(props);
      if (litepickerRef.current !== null) {
        init(litepickerRef.current, props);
      }
      initialRender.current = false;
    } else {
      if (tempValue.current !== props.value && litepickerRef.current !== null) {
        reInit(litepickerRef.current, props);
      }
    }

    tempValue.current = props.value;
  }, [props.value]);

  const { options, value, onChange, getRef, ...computedProps } = props;

  return (
    <FormInput
      ref={litepickerRef}
      type="text"
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      {...computedProps}
    />
  );
}

const getDefaultValue = () => {
  const today = new Date();
  const oneYearBack = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  return `${oneYearBack.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} - ${today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
};

Litepicker.defaultProps = {
  options: {},
  value: getDefaultValue(),
  onChange: () => {},
  getRef: () => {},
};

export default Litepicker;

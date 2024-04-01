import { twMerge } from "tailwind-merge";

function FormHelp(props) {
  return (
    <div
      {...props}
      className={twMerge(["text-xs text-slate-500 mt-2", props.className])}
    >
      {props.children}
    </div>
  );
}

export default FormHelp;

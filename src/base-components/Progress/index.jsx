import { twMerge } from "tailwind-merge";

function Progress(props) {
  return (
    <div
      {...props}
      className={twMerge([
        "w-full h-2 bg-slate-200 rounded dark:bg-black/20",
        props.className,
      ])}
    >
      {props.children}
    </div>
  );
}

Progress.Bar = (props) => {
  return (
    <div
      {...props}
      className={twMerge([
        "bg-primary h-full rounded text-xs text-white flex justify-center items-center",
        props.className,
      ])}
    >
      {props.children}
    </div>
  );
};

export default Progress;

import { twMerge } from "tailwind-merge";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { Fragment, createContext, useContext, useRef, useState } from "react";

const slideoverContext = createContext({
  open: false,
  zoom: false,
  size: "md",
});

function Slideover({
  children,
  className,
  as = "div",
  open = false,
  onClose,
  staticBackdrop,
  size = "md",
  ...props
}) {
  const focusElement = (useRef < HTMLElement) | (null > null);
  const [zoom, setZoom] = useState(false);

  return (
    <slideoverContext.Provider
      value={{
        open: open,
        zoom: zoom,
        size: size,
      }}
    >
      <Transition appear as={Fragment} show={open}>
        <HeadlessDialog
          as={as}
          onClose={(value) => {
            if (!staticBackdrop) {
              return onClose(value);
            } else {
              setZoom(true);
              setTimeout(() => {
                setZoom(false);
              }, 300);
            }
          }}
          initialFocus={focusElement}
          className={twMerge(["relative z-[60]", className])}
          {...props}
        >
          {children}
        </HeadlessDialog>
      </Transition>
    </slideoverContext.Provider>
  );
}

Slideover.Panel = ({ children, className, as = "div", ...props }) => {
  const slideover = useContext(slideoverContext);
  return (
    <>
      <Transition.Child
        as="div"
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-[400ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-black/60"
        aria-hidden="true"
      />
      <Transition.Child
        as="div"
        enter="ease-in-out duration-500"
        enterFrom="opacity-0 -mr-[100%]"
        enterTo="opacity-100 mr-0"
        leave="ease-in-out duration-[400ms]"
        leaveFrom="opacity-100 mr-0"
        leaveTo="opacity-0 -mr-[100%]"
        className="fixed inset-y-0 right-0"
      >
        <HeadlessDialog.Panel
          as={as}
          className={twMerge([
            "w-[90%] ml-auto h-screen flex flex-col bg-white relative shadow-md transition-transform dark:bg-darkmode-600",
            slideover.size == "md" && "sm:w-[460px]",
            slideover.size == "sm" && "sm:w-[300px]",
            slideover.size == "lg" && "sm:w-[600px]",
            slideover.size == "xl" && "sm:w-[600px] lg:w-[900px]",
            slideover.zoom && "scale-105",
            className,
          ])}
          {...props}
        >
          {children}
        </HeadlessDialog.Panel>
      </Transition.Child>
    </>
  );
};

Slideover.Title = ({ children, className, as = "div", ...props }) => {
  return (
    <HeadlessDialog.Title
      as={as}
      className={twMerge([
        "flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400",
        className,
      ])}
      {...props}
    >
      {children}
    </HeadlessDialog.Title>
  );
};

Slideover.Description = ({ children, className, as = "div", ...props }) => {
  return (
    <HeadlessDialog.Description
      as={as}
      className={twMerge(["p-5 overflow-y-auto flex-1", className])}
      {...props}
    >
      {children}
    </HeadlessDialog.Description>
  );
};

Slideover.Footer = ({ children, className, as, ...props }) => {
  const Component = as || "div";

  return (
    <Component
      className={twMerge([
        "px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400",
        className,
      ])}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Slideover;

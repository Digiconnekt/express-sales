import {
  createContext,
  createRef,
  useEffect,
  useState,
  useContext,
} from "react";
import Button from "../Button";
import Lucide from "../Lucide";
import jsBeautify from "js-beautify";
import hljs from "highlight.js";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const previewCodeContext = createContext(true);

function PreviewComponent(props) {
  const [previewCode, setPreviewCode] = useState(true);
  return (
    <previewCodeContext.Provider value={previewCode}>
      <div className={props.className}>
        {typeof props.children === "function"
          ? props.children({
              toggle: () => {
                setPreviewCode(!previewCode);
              },
            })
          : props.children}
      </div>
    </previewCodeContext.Provider>
  );
}

function Preview(props) {
  const previewCode = useContext(previewCodeContext);
  return <div>{previewCode ? props.children : ""}</div>;
}

function Source(props) {
  const previewCode = useContext(previewCodeContext);
  return <div>{!previewCode ? props.children : ""}</div>;
}

function Highlight(props) {
  const [copyText, setCopyText] = useState("Copy example code");
  const highlightRef = createRef();
  const copySourceEl = createRef();
  const [copySource, setCopySource] = useState("");

  useEffect(() => {
    if (highlightRef.current) {
      const codeEl = highlightRef.current.querySelectorAll("code")[0];
      let source = codeEl.innerHTML;

      // Format for beautify
      source = _.replace(source, /&lt;/g, "<");
      source = _.replace(source, /&gt;/g, ">");

      // Beautify code
      source = jsBeautify.html(source);

      // Save for copy code function
      setCopySource(source);

      // Format for highlight.js
      source = _.replace(source, /</g, "&lt;");
      source = _.replace(source, />/g, "&gt;");

      codeEl.innerHTML = source;

      hljs.highlightElement(codeEl);
    }
  }, []);

  return (
    <div>
      {props.copyButton && (
        <Button
          variant="outline-secondary"
          className={clsx(["py-1 px-2", props.className])}
          onClick={() => {
            setCopyText("Copied!");
            setTimeout(() => {
              setCopyText("Copy example code");
            }, 1500);

            copySourceEl.current?.select();
            copySourceEl.current?.setSelectionRange(0, 99999);
            document.execCommand("copy");
          }}
        >
          <Lucide icon="File" className="w-4 h-4 mr-2" /> {copyText}
        </Button>
      )}
      <div
        ref={highlightRef}
        className={twMerge([
          "rounded-md overflow-hidden relative",
          props.copyButton && "mt-3",
          !props.copyButton && [props.className],
        ])}
      >
        <pre className="relative grid">
          <code
            className={clsx([
              "text-xs leading-relaxed [&.hljs]:bg-slate-50 [&.hljs]:px-5 [&.hljs]:py-4",
              "[&.hljs]:dark:text-slate-200 [&.hljs]:dark:bg-darkmode-700 [&.hljs_.hljs-string]:dark:text-slate-200 [&.hljs_.hljs-tag]:dark:text-slate-200 [&.hljs_.hljs-name]:dark:text-emerald-500 [&.hljs_.hljs-attr]:dark:text-sky-500",
              "before:content-['HTML'] before:font-roboto before:font-medium before:px-4 before:py-2 before:block before:absolute before:top-0 before:right-0 before:rounded-bl before:bg-slate-200 before:bg-opacity-70 before:dark:bg-darkmode-400",
              "[&.javascript]:before:content-['JS']",
              props.type,
            ])}
          >
            {props.children}
          </code>
          <textarea
            ref={copySourceEl}
            value={copySource}
            onChange={() => {}}
            className="absolute w-0 h-0 p-0 -mt-1 -ml-1"
          ></textarea>
        </pre>
      </div>
    </div>
  );
}

Highlight.defaultProps = {
  copyButton: true,
  type: "html",
  className: "",
};

export { PreviewComponent, Preview, Source, Highlight };

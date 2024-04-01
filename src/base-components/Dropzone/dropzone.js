import Dropzone from "dropzone";

const init = (el, props) => {
  Dropzone.autoDiscover = false;
  if (!el.dropzone) {
    el.dropzone = new Dropzone(el, props.options);
  }
};

export { init };

import Toastify from "toastify-js";

const toastifyClass = "_" + Math.random().toString(36).substr(2, 9);

const init = (el, props) => {
  el.showToast = () => {
    const clonedEl = el.cloneNode(true);
    clonedEl.classList.remove("hidden");
    clonedEl.classList.add(toastifyClass);
    clonedEl.toastify = Toastify({
      duration: -1,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      ...props.options,
      node: clonedEl,
    });
    clonedEl.toastify.showToast();
    clonedEl
      .querySelectorAll("[data-dismiss='notification']")
      .forEach(function (el) {
        el.addEventListener("click", function () {
          clonedEl.toastify.hideToast();
        });
      });

    el.hideToast = () => {
      document.querySelectorAll(`.${toastifyClass}`).forEach(function (el) {
        const toastifyEl = el;
        toastifyEl.toastify.hideToast();
      });
    };
  };
};

const reInit = (el) => {
  const wrapperEl = document.querySelectorAll(`.${toastifyClass}`)[0];
  if (wrapperEl) {
    wrapperEl.innerHTML = el.innerHTML;
  }
};

export { init, reInit };

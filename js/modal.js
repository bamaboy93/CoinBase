(() => {
  const body = document.querySelector("body");
  const modalButtons = document.querySelectorAll(".js-open-modal");
  const modalCloseButtons = document.querySelectorAll(".js-close-modal");
  const modal = document.querySelectorAll(".backdrop");

  let unlock = true;
  const timeout = 250;

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      const modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.backdrop[data-modal="' + modalId + '"]'
        );

      modalOpen(modalElem);
    });
  });

  modalCloseButtons.forEach(function (el) {
    el.addEventListener("click", function () {
      modalClose(el.closest(".backdrop"));
    });
  });

  modal.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      if (e.currentTarget === e.target) {
        modalClose(elem);
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      const modalActive = document.querySelector(".backdrop.is-open");
      modalClose(modalActive);
    }
  });

  function modalOpen(modalElem) {
    if (modalElem && unlock) {
      const modalActive = document.querySelector(".backdrop.is-open");
      if (modalActive) {
        modalClose(modalActive, false);
      } else {
        bodyLock();
      }

      modalElem.classList.add("is-open");
    }
  }

  function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
      modalActive.classList.remove("is-open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    body.classList.add("lock");

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(() => {
      body.classList.remove("lock");
    }, timeout);

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
})();

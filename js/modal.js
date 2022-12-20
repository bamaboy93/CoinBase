(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function onKeydown(e) {
    if (e.code === "Escape") {
      toggleModal();
      window.removeEventListener("keydown", onKeydown);
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
    window.addEventListener("keydown", onKeydown);
  }
})();

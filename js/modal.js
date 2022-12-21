// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.modal.addEventListener("click", onBackdropClick);

//   function onKeydown(e) {
//     if (e.code === "Escape") {
//       toggleModal();
//       window.removeEventListener("keydown", onKeydown);
//     }
//   }

//   function onBackdropClick(e) {
//     if (e.currentTarget === e.target) {
//       toggleModal();
//     }
//   }

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle("is-hidden");
//     window.addEventListener("keydown", onKeydown);
//   }
// })();

const modalLinks = document.querySelectorAll(".modal-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 250;

if (modalLinks.length > 0) {
  for (let index = 0; index < modalLinks.length; index++) {
    const modalLink = modalLinks[index];
    modalLink.addEventListener("click", function (e) {
      const modalName = modalLink.getAttribute("href").replace("#", "");
      const currentModal = document.getElementById(modalName);
      modalOpen(currentModal);
      e.preventDefault();
    });
  }
}

function modalOpen(currentModal) {
  if (currentModal && unlock) {
    const modalActive = document.querySelector(".modal.open");
    if (modalActive) {
      modalClose(modalActive, false);
    } else {
      bodyLock();
    }
    currentModal.classList.add(".open");
    currentModal.addEventListener("click", function (e) {
      if (!e.target.closest(".modal__content")) {
        modalClose(e.target.closest(".modal"));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    modalActive.classList.remove("open");
    if (doUnlock) {
      bodyLock();
    }
  }
}

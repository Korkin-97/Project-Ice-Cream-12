(() => {
    const refs = {
      openModalBtn: document.querySelector("[ice-open-btn]"),
      closeModalBtn: document.querySelector("[ice-close-btn]"),
      modal: document.querySelector("[ice-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
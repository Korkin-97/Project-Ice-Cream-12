(() => {
    const refs = {
      openModalBtn: document.querySelector("[map-modal-open]"),
      closeModalBtn: document.querySelector("[map-modal-close]"),
      modal: document.querySelector("[map-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector("[franchise-modal-open]"),
      closeModalBtn: document.querySelector("[franchise-modal-close]"),
      modal: document.querySelector("[franchise-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
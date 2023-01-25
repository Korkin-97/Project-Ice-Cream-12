(() => {
    const refs = {
      openModalBtn: document.querySelector("[icecream-modal-open]"),
      closeModalBtn: document.querySelector("[icecream-modal-close]"),
      modal: document.querySelector("[icecream-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
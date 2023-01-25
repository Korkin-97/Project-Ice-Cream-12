var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    close1ModalBtn: document.querySelector('[data-modal-close1]'),
    close2ModalBtn: document.querySelector('[data-modal-close2]'),
    close3ModalBtn: document.querySelector('[data-modal-close3]'),
    close4ModalBtn: document.querySelector('[data-modal-close4]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.close1ModalBtn.addEventListener('click', toggleModal);
  refs.close2ModalBtn.addEventListener('click', toggleModal);
  refs.close3ModalBtn.addEventListener('click', toggleModal);
  refs.close4ModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[adv-modal-open]'),
    closeModalBtn: document.querySelector('[adv-modal-close]'),
    modal: document.querySelector('[adv-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[prod-modal-open]'),
    closeModalBtn: document.querySelector('[prod-modal-close]'),
    modal: document.querySelector('[prod-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

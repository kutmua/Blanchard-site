document.addEventListener('DOMContentLoaded', function(){
  const btnsOpenModal = document.querySelectorAll('.gallery__swiper-slide');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalsWindow = document.querySelectorAll('.modal__window');
  const btnCloseModal = document.querySelectorAll('.modal__window-close-btn');
  let body = document.querySelector('body');

  // кнопка открытия модального окна
  btnsOpenModal.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let path = e.currentTarget.getAttribute('data-path');

      modalsWindow.forEach((el) =>{
        el.classList.remove('modal__window--visible');
      });

      document.querySelector(`[data-target=${path}]`).classList.add('modal__window--visible');
      modalOverlay.classList.add('modal__overlay--visible');
      body.classList.add('overflow--lock');
    })
  })

  // кнопка закрытия модального окна
  btnCloseModal.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOverlay.classList.remove('modal__overlay--visible');
      body.classList.remove('overflow--lock');
      modalsWindow.forEach((el) =>{
        el.classList.remove('modal__window--visible');
      });
    });
  });

  // закрытие модального окна при нажатии по свободному месту
  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal__overlay--visible');
      body.classList.remove('overflow--lock');
      modalsWindow.forEach((el) =>{
        el.classList.remove('modal__window--visible');
      });
    };
  });

})

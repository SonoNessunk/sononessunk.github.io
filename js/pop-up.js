const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    popup.classList.add('show');
  });
});

const closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(close => {
  close.addEventListener('click', () => {
    const popup = close.parentNode;
    popup.classList.remove('show');
  });
});
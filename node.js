// document.querySelector(".navbar").style.display = 'none';
function hide() {
  const hidden = document.querySelector(".navbar");
  hidden.style.display = 'none';
  hidden.style.animation = 'ease-out';
}

function doThis() {
  const showUp = document.querySelector(".navbar");
  showUp.style.display = '';
  showUp.style.animation = 'ease-in';
}
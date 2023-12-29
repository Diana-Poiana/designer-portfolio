

const button = document.getElementById('button');
const menuBtn = document.getElementById('menu_btn');

button.onclick = function () {
  button.classList.toggle('active');
  menuBtn.classList.toggle('active');
};

const gallery = new Viewer(document.getElementById('images'));


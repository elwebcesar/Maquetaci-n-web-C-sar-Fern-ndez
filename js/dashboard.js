const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  this.classList.toggle("active");
});


$(function() {
  $("form[name='form_buscar']").validate();
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


const btnUser = document.getElementById('menu-user');

btnUser.addEventListener('click', function () {
  this.classList.toggle("active");
});

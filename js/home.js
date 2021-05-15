$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 1,
    nav: true,
    loop: true,
    items: 1,
    autoplay:true,
    autoplayTimeout: 10000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    smartSpeed: 250
  })
});


$(".toggle-password").click(function() {
  $(this).toggleClass("eye_view");
  var input = $($(this).attr("toggle"));

  if (input.attr("type") == "password") {
    input.attr("type", "text");
  }
  else {
    input.attr("type", "password");
  }
});


$(function() {
  $("form[name='form_acceso']").validate({
    // Specify validation rules
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    /*
    messages: {
      firstname: "Por favor, introduzca su nombre",
      lastname: "Por favor, introduzca su apellido",
      password: {
        required: "Por favor proporcione una contraseña",
        minlength: "Su contraseña debe tener al menos 5 caracteres."
      },
      email: "Por favor, introduce una dirección de correo electrónico válida"
    },
    */
    submitHandler: function(form) {
      form.submit();
    }
  });
});
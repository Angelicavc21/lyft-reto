$(document).ready(function() {
    setTimeout(function() {
     window.location.href = 'views/inicio.html';
    }, 3000);
});

(document).ready(function() {
    var inputEmail = $('#inputEmail');
    var inputPassword = $('#inputPassword');
    // asociando eventos
   $email.on('input', function(event){
    console.log($(this).val());
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));

    });
   
   $password.on('input', function() {
       if ($(this).val().length >= 6) {
           alert('cumple');
       } else {
           alert('no cumple');
       }
      console.log($(this).val());
    }
    );
});







$('a.btn.white').click(function() {
    $('#dropdown1').toggleClass('hide');
  });
  
  $('#dropdown1').attr({'style': 'width: 90px; position: absolute; top: 158px; left: 108px; display: block; opacity: 1'});
  // Habilitando boton deacuerdo al contenido
  $('#input_text').keyup(function() {
    if ($('#input_text').val().length < 10) {
      $('#next').addClass('disabled');
      $('#next').removeClass('btn-next');
    } else if ($('#input_text').val().length == 10) {
      $('#next').removeClass('grey lighten-2 disabled');
      $('#next').addClass('btn-next');
    }
  });
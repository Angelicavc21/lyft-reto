
// Codigo aleatorio LAB-000
function rand_code(chars, lon) {
  code = '';
  for (x = 0; x < lon; x++) {
    rand = Math.floor(Math.random() * chars.length);
    code += chars.substr(rand, 1);
  }
  return code;
}
caracteres = '0123456789';
longitud = 3;
// Mostrando codigo aleatorio
$('#next').click(function() {
  alert('Tu codigo LAB -' + rand_code(caracteres, longitud));
  $('#next').attr('href', 'singnup2.html');
});


$('#code').keyup(function() {
  if ($('#code').val().length < 3) {
    $('#next2').addClass('disabled');
    $('#next2').removeClass('btn-next');
  } else if ($('#code').val().length == 3) {
    $('#next2').removeClass('grey lighten-2 disabled');
    $('#next2').addClass('btn-next');
    $('#next2').attr('href', 'check.html');
  }
});

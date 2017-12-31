
$('#code').keyup(function() {
  if ($('#code').val().length < 3) {
    $('#next2').addClass('disabled');
    $('#next2').removeClass('btn-next');
  } else if ($('#code').val().length == 3) {
    $('#next2').removeClass('grey lighten-2 disabled');
    $('#next2').addClass('btn-next');
    $('#next2').attr('href', 'singnup2.html');
  }
});
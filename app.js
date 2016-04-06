
$(document).ready(function(){
  var home = $('#home');
  var about = $('#about');
  var contact = $('#contact');
  home.hover(function(){
    home.fadeTo('slow',0.25);
  },
  function(){
    home.fadeTo("slow",1);
  });
  home.on('click', function() {
    home.css('background-color', 'white');
    home.after( "<b>clicked</b>");
  });
  //
  // var img = $('#myPicture');
  // console.log(img.attr('src'));
  // console.log(img.css('width'));
  // img.css('width','400px');
  // // img.css('width', '1000px').hide().delay(400).fadeIn(1800);
  // img.on('click', function(){
  //   img.hide().delay(400).fadeIn(1800);
  // })
});

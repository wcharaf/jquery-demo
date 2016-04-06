
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
    home.css('background-color', 'gray');
    home.add(" <span><b> clicked</b></span>").appendTo(home)
  });

  about.hover(function(){
    about.fadeTo('slow',0.25);
  },
  function(){
    about.fadeTo("slow",1);
  });
  about.on('click', function() {
    about.css('background-color', 'white');
    about.add(" <span><b> clicked</b></span>").appendTo(about)
  });

  contact.hover(function(){
    contact.fadeTo('slow',0.25);
  },
  function(){
    contact.fadeTo("slow",1);
  });
  contact.on('click', function() {
    contact.css('background-color', 'white');
    contact.add(" <span><b> clicked</b></span>").appendTo(contact)
  });
});

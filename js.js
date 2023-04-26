// Smooth Scrolling
$('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }

});

// Form Submission
$('form').on('submit', function(event) {
  event.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();

  $.ajax({
    type: 'POST',
    url: 'submit.php',
    data: { name: name, email: email, message: message },
    success: function(response) {
      alert(response);
      $('form')[0].reset();
    },
    error: function() {
      alert('Error: Message not sent.');
    }
  });
});


// Animate Skills Section on Scroll
$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();
  var skillsTop = $('#skills').offset().top;

  if (scroll + windowHeight > skillsTop) {
    $('#skills').addClass('active');
  }
});


// Animate Project Descriptions on Scroll
$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();

  $('.project').each(function() {
    var projectTop = $(this).offset().top;
    var projectHeight = $(this).height();

    if (scroll + windowHeight > projectTop + projectHeight / 2) {
      $(this).addClass('active');
    }
  });
});


// Animate Contact Section on Scroll
$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scroll = $(window).scrollTop();
  var contactTop = $('#contact').offset().top;

  if (scroll + windowHeight > contactTop) {
    $('#contact').addClass('active');
  }
});

$(document).ready(function() {
  $(jQuery).ready(function() {
    $('#home').click(function() {
      document.getElementById('home').className = 'nav-link active';
      document.getElementById('skills').className = 'nav-link';
      document.getElementById('contact').className = 'nav-link';
      $('#content-skills').slideUp();
      $('#content-contact').slideUp();
      $('#content-home').slideDown();
    });
    $('#skills').click(function() {
      document.getElementById('skills').className = 'nav-link active';
      document.getElementById('home').className = 'nav-link';
      document.getElementById('contact').className = 'nav-link';
      $('#content-home').slideUp();
      $('#content-contact').slideUp();
      $('#content-skills').slideDown();
    });
    $('#contact').click(function() {
      document.getElementById('contact').className = 'nav-link active';
      document.getElementById('home').className = 'nav-link';
      document.getElementById('skills').className = 'nav-link';
      $('#content-home').slideUp();
      $('#content-skills').slideUp();
      $('#content-contact').slideDown();
    });

    function progressBar(id, value) {
      var bar = new ProgressBar.Circle(id, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
      });
      bar.animate(value);
    }
  });
});

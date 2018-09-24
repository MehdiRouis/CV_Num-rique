$(document).ready(function() {
  $(jQuery).ready(function() {
    var skilldown = 0;
    $('#home').click(function() {
      document.getElementById('home').className = 'nav-link active';
      document.getElementById('skills').className = 'nav-link';
      document.getElementById('contact').className = 'nav-link';
      $('#content-skills').slideUp();
      $('#content-contact').slideUp();
      $('#content-home').slideDown();
    });
    $('#skills').click(function() {
      skilldown++;
      document.getElementById('skills').className = 'nav-link active';
      document.getElementById('home').className = 'nav-link';
      document.getElementById('contact').className = 'nav-link';
      $('#content-home').slideUp();
      $('#content-contact').slideUp();
      $('#content-skills').slideDown();
      if(skilldown === 1) {
        progressBar('#html5-progressbar', 0.7, '#f16528');
        progressBar('#css3-progressbar', 0.5, '#1c88c7');
        progressBar('#php7-progressbar', 0.8, '#777bb3');
        progressBar('#js-progressbar', 0.4, '#f1bf28');
        progressBar('#angular-progressbar', 0.01, '#b53031');
        progressBar('#symfony-progressbar', 0.3, '#19171b');
        progressBar('#slim-progressbar', 0.4, '#729e3f');
        progressBar('#bootstrap-progressbar', 0.4, '#8559d1');

      }
    });
    $('#contact').click(function() {
      document.getElementById('contact').className = 'nav-link active';
      document.getElementById('home').className = 'nav-link';
      document.getElementById('skills').className = 'nav-link';
      $('#content-home').slideUp();
      $('#content-skills').slideUp();
      $('#content-contact').slideDown();
    });

    function progressBar(id, value, color) {
      var bar = new ProgressBar.Circle(id, {
        strokeWidth: 9,
        easing: 'easeInOut',
        duration: 2000,
        color: color,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
      });
      bar.animate(value);
    }
  });
});

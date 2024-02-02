
$(document).ready(function () {
    let $root = $("html, body");
  
    $('a[href^="#"]').click(function () {
      $root.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 100,
        },
        500
      );
  
      return false;
    });
  
    
    $(function () {
      $(window).scroll(function () {
        let navegador = $(".navbar");
        if ($(this).scrollTop() > 100) {
          navegador.css("background", "#3bb312");
        } else {
          navegador.css("background", "none");
        }
      });
    });
  });
  
   
  let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
    pause: false
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('#Contacto form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Su mensaje ha sido enviado correctamente');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#Contacto button');
    button.setAttribute('data-toggle', 'tooltip');
    button.setAttribute('data-placement', 'right');
    button.setAttribute('title', 'Clic para enviar mensaje');
  
    // iniciar tooltips 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
  });
  
  
// Al hacer clic en un enlace, anima el desplazamiento suave de la página a la posición de la sección referenciada, con un desplazamiento adicional de 100 píxeles hacia arriba para compensar la barra de navegación fija.
// Retorna false para evitar el comportamiento predeterminado del enlace.
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

  // Cambia el color de fondo de la barra de navegación a verde (#3bb312) cuando el desplazamiento vertical de la ventana sea superior a 100 píxeles.
  // De lo contrario, restaura el color de fondo a ninguno.  
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

// Se configura para que no se pause la animación automáticamente
let carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
  pause: false
});

// Escucha el evento de carga del DOM y añade un listener al formulario de contacto.
// Previene el comportamiento predeterminado del formulario y muestra una alerta al enviar el mensaje.
document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('#Contacto form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Su mensaje ha sido enviado correctamente');
  });
});

// Cuando el DOM esté completamente cargado, configura un botón para mostrar un tooltip.
// El tooltip se mostrará en el lado derecho del botón y contendrá el mensaje "Clic para enviar mensaje".
document.addEventListener('DOMContentLoaded', function () {
  let button = document.querySelector('#Contacto button');
  button.setAttribute('data-toggle', 'tooltip');
  button.setAttribute('data-placement', 'right');
  button.setAttribute('title', 'Clic para enviar mensaje');


  // Inicializa el plugin de tooltip para todos los elementos que tengan el atributo 'data-toggle' establecido como 'tooltip'.
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});


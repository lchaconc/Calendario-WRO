$(document).ready(function () {
  $('#myModal').modal('hide');
  $.getJSON("data/datos.json", function(datos) {
    //console.log(datos);
    $(".table-responsive").click(function (e) {
       var ident = e.target.id;
      //  console.log(e.currentTarget);
      //    $(e.currentTarget.td).css("background-color", "yellow");
       cargarModal(ident.slice(0,3)); //Esto para trabajar con la misma información sin repetir ID
    });
    $(".headCalendar").click(collapseGlip);

    function cargarModal(idCelda) {
    //  console.log(idCelda);
        var returnedData = $.grep(datos, function (element, index) {
            return element.id == idCelda;
        });
        //console.log(returnedData);
        if (returnedData[0]){
          $('#myModal').modal('show');
          // $('#divID').css("background-image", "url(/myimage.jpg)");
          // $('#myModal').css('background-image','url(image/fondo-dia1.png) repeat');
          $('#myModal').on('show.bs.modal', function (event) {var modal = $(this)
              modal.find('.modal-title').text(returnedData[0].taller);
              var texto = "<p><strong>Institución:</strong> "+returnedData[0].institucion+"</p>"+
                          "<p><strong>Descripción:</strong> "+returnedData[0].descripcion+"</p>"+
                          "<p><strong>Audiencia:</strong> "+returnedData[0].audiencia+"</p>"+
                          "<p><strong>Requisitos:</strong> "+returnedData[0].requisitos+"</p>"+
                          "<p><strong>Horario:</strong> "+returnedData[0].horario+"</p>"+
                          "<p><strong>Cantidad de participantes:</strong> "+returnedData[0].cantidad+"</p>"+
                          "<p><strong>Idioma:</strong> "+returnedData[0].idioma+"</p>"+
                          "<p><strong>Observaciones:</strong> "+returnedData[0].observaciones+"</p>";
              // if(returnedData[0].adjuntos !="")
              //   {texto = texto+"<p><strong>Adjuntos:</strong> "+returnedData[0].adjuntos+"</p>";}
              modal.find('.modal-body').html(texto);
          });
          $('#myModal').modal('show');
        };
    }
//Carga la funcinalidad de cambio de Idioma
  cambiarMainTitles();
  cargarTituloTalleres(datos);
  addEvento();



  });
});

function collapseGlip() {
  elementSpan = this.children;
  $(".collapse").on('shown.bs.collapse', function(){
      // The collapsible content is now fully shown.');
      $(elementSpan).removeClass("glyphicon-plus");
      $(elementSpan).addClass("glyphicon-minus");
  });
  $(".collapse").on('hidden.bs.collapse', function(){
      // 'The collapsible content is about to be hidden
      $(elementSpan).removeClass("glyphicon-minus");
      $(elementSpan).addClass("glyphicon-plus");
  });
}

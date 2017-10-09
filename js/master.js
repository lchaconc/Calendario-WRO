var esp = true, dataEng, dataEsp;

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

    //CArga la información del modal con

//Carga la funcinalidad de cambio de Idioma
  dataEsp = datos;
  loadJasonEnglish();

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


function loadJasonEnglish() {
  $.getJSON( "data/datos_english.json", function( dIngles ) {
    // callback
    dataEng = dIngles;
    //console.log("json en inglés cargado");
    caragarIdioma();
    addEvento();
  });

}



function addEvento() {
  $("#btnCambiarIdioma").click(function () {
      esp=!esp;
      //console.log(esp);
      cambiarMainTitles();
      cargarTituloTalleres();
  })
}

function caragarIdioma() {
  cambiarMainTitles();
  cargarTituloTalleres();
}

function cambiarMainTitles() {
  var salaM = $(".salaM"),  salaT = $(".salaT"),
  maxSalasM=salaM.length, num=0,  diasTaller=$(".diasTaller");

  if (esp) {
    $(".main-title").text("CALENDARIO DE TALLERES");
    $("#btnCambiarIdioma").text("Español");
    $(".place").text("LUGAR");
    $(".inMorning").html("MAÑANA <span  class='glyphicon glyphicon-minus' aria-hidden='true'></span>");
    $(".inEvening").html("TARDE <span  class='glyphicon glyphicon-minus' aria-hidden='true'></span>");

    $(".text-intro").text("8:00 am Recibimiento y acreditación de participantes");
    $("#celdaCierre").text("Cierre de la Olimpiada");
    //Nombre de salas de la mañana
    for (var i = 0; i < maxSalasM; i++) {
      num++;
      $(salaM[i]).text("Sala " + num);
      $(salaT[i]).text("Sala " + num);
        if (num > 9) {
          num=0;
        }
    }

    // nombre de días
    $(diasTaller[0]).text("Viernes");
    $(diasTaller[1]).text("Sábado");
    $(diasTaller[2]).text("Domingo");


  }else {
    $(".main-title").text("WORKSHOPS SCHEDULE");
    $("#btnCambiarIdioma").text("English");
    $(".place").text("PLACE");
    $(".inMorning").html("MORNING <span  class='glyphicon glyphicon-minus' aria-hidden='true'></span>");
    $(".inEvening").html("AFTERNOON <span  class='glyphicon glyphicon-minus' aria-hidden='true'></span>");
    $(".text-intro").text("8:00 am Participant registration and accreditation");
    $("#celdaCierre").text("Closing of the event");
    for (var i = 0; i < maxSalasM; i++) {
      num++;
      $(salaM[i]).text("Room " + num);
      $(salaT[i]).text("Room " + num);
        if (num > 9) {
          num=0;
        }
    }

    // nombre de días
    $(diasTaller[0]).text("Friday");
    $(diasTaller[1]).text("Saturday");
    $(diasTaller[2]).text("Sunday");
  }

}


function cargarTituloTalleres() {
    var titulosHtml = $(".enlace-modal"),
    maxTitulos = titulosHtml.length, tituloId;

    if (esp) {
      //console.log("Modo Español");
      arreglo = dataEsp;
    }else {
      arreglo = dataEng;
    //  console.log("Modo Inglés");
    };
     maxArreglo = arreglo.length;

  // console.log(arreglo[1].taller);
  // console.log(titulosHtml[1].id);

    for (var i = 0; i < maxTitulos; i++) {
        //console.log(titulosHtml[i].id);
          for (var n = 0; n < maxArreglo; n++) {
            tituloId = titulosHtml[i].id.slice(0, 3);
              if (tituloId == arreglo[n].id) {
                $(titulosHtml[i]).text(arreglo[n].taller);
                //console.log(titulosHtml[i].id);
                //console.log(arreglo[n].taller);
      }
    }
  }
}

function cargarModal(idCelda) {
//  console.log(idCelda);
//  console.log(arreglo);
//  console.log(idCelda);
//  console.log("Cargando información del modal");
    var returnedData = $.grep(arreglo, function (element, index) {
        return element.id == idCelda;
    });
    //console.log(returnedData);
    if (returnedData[0]){
      $('#myModal').modal('show');
      // $('#divID').css("background-image", "url(/myimage.jpg)");
      // $('#myModal').css('background-image','url(image/fondo-dia1.png) repeat');
      $('#myModal').on('show.bs.modal', function (event) {var modal = $(this)
          modal.find('.modal-title').text(returnedData[0].taller);
              if (esp) {
                var texto = "<p><strong>Institución:</strong> "+returnedData[0].institucion+"</p>"+
                            "<p><strong>Descripción:</strong> "+returnedData[0].descripcion+"</p>"+
                            "<p><strong>Audiencia:</strong> "+returnedData[0].audiencia+"</p>"+
                            "<p><strong>Requisitos:</strong> "+returnedData[0].requisitos+"</p>"+
                            "<p><strong>Horario:</strong> "+returnedData[0].horario+"</p>"+
                            "<p><strong>Cantidad de participantes:</strong> "+returnedData[0].cantidad+"</p>"+
                            "<p><strong>Idioma:</strong> "+returnedData[0].idioma+"</p>"+
                            "<p><strong>Observaciones:</strong> "+returnedData[0].observaciones+"</p>";
              } else {
                var texto = "<p><strong>Institution:</strong> "+returnedData[0].institution+"</p>"+
                            "<p><strong>Description:</strong> "+returnedData[0].description+"</p>"+
                            "<p><strong>Audience:</strong> "+returnedData[0].audience+"</p>"+
                            "<p><strong>Requeriments:</strong> "+returnedData[0].requeriments+"</p>"+
                            "<p><strong>Schedule:</strong> "+returnedData[0].schedule+"</p>"+
                            "<p><strong>Spot:</strong> "+returnedData[0].spot+"</p>"+
                            "<p><strong>Language:</strong> "+returnedData[0].language+"</p>"+
                            "<p><strong>Comments:</strong> "+returnedData[0].comments+"</p>";
              }
          // if(returnedData[0].adjuntos !="")
          //   {texto = texto+"<p><strong>Adjuntos:</strong> "+returnedData[0].adjuntos+"</p>";}
          modal.find('.modal-body').html(texto);
      });
      $('#myModal').modal('show');
    };
}

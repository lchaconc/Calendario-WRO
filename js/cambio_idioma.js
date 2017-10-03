var esp = true;

$(function() {
  cambiarMainTitles();
  addEvento();
});


function addEvento() {
  $("#btnCambiarIdioma").click(function () {
    cambiarIdioma();
  })
}


function cambiarIdioma() {
  esp=!esp;
  console.log(esp);
  cambiarMainTitles();

}



function cambiarMainTitles() {
  var salaM = $(".salaM"), num, maxSalasM=salaM.length,
  diasTaller=$(".diasTaller");

  if (esp) {
    $(".main-title").text("CALENDARIO DE TALLERES");
    $("#btnCambiarIdioma").text("To English");
    $(".place").text("LUGAR");
    $(".inMorning").text("MAÑANA");
    $(".inEvening").text("TARDE");

    $(".text-intro").text("8:00 am Recibimiento y acreditación de participantes");
    //Nombre de salas
    for (var i = 0; i < maxSalasM; i++) {
      num = i + 1;
      $(salaM[i]).text("Sala " + num);
    }
    // nombre de días
    $(diasTaller[0]).text("Viernes");
    $(diasTaller[1]).text("Sábado");
    $(diasTaller[2]).text("Domingo");


  }else {
    $(".main-title").text("WORKSHOP SCHEDULE");
    $("#btnCambiarIdioma").text("A Español");
    $(".place").text("PLACE");
    $(".inMorning").text("MORNING");
    $(".inEvening").text("EVENING");
    $(".text-intro").text("8:00 am Participant registration and accreditation");
    for (var i = 0; i < maxSalasM; i++) {
      num = i + 1;
      $(salaM[i]).text("Room " + num);
    }

    // nombre de días
    $(diasTaller[0]).text("Friday");
    $(diasTaller[1]).text("Saturday");
    $(diasTaller[2]).text("Sunday");
  }

}
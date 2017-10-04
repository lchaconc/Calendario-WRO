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
  var salaM = $(".salaM"),  salaT = $(".salaT"),
  maxSalasM=salaM.length, num=0,  diasTaller=$(".diasTaller");

  if (esp) {
    $(".main-title").text("CALENDARIO DE TALLERES");
    $("#btnCambiarIdioma").text("To English");
    $(".place").text("LUGAR");
    $(".inMorning").text("MAÑANA");
    $(".inEvening").text("TARDE");

    $(".text-intro").text("8:00 am Recibimiento y acreditación de participantes");
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
    $(".main-title").text("WORKSHOP SCHEDULE");
    $("#btnCambiarIdioma").text("A Español");
    $(".place").text("PLACE");
    $(".inMorning").text("MORNING");
    $(".inEvening").text("EVENING");
    $(".text-intro").text("8:00 am Participant registration and accreditation");
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

let appliances = [];

function agregarArtefacto() {
    var artefactoSelect = document.getElementById("artefacto");
    var cantidadInput = document.getElementById("cantidad");
    var tablaBody = document.getElementById("tbody");

    var artefacto = artefactoSelect.options[artefactoSelect.selectedIndex].text;
    var consumoHora = parseInt(artefactoSelect.value);
    var cantidad = parseInt(cantidadInput.value);
    var consumoTotal = consumoHora * cantidad;

    var newRow = tablaBody.insertRow();
    var cellArtefacto = newRow.insertCell(0);
    var cellConsumoHora = newRow.insertCell(1);
    var cellCantidad = newRow.insertCell(2);
    var cellConsumoTotal = newRow.insertCell(3);
    var cellHorasUso = newRow.insertCell(4);
    var cellConsumoDia = newRow.insertCell(5);
    var cellEliminar = newRow.insertCell(6);

    cellArtefacto.innerHTML = artefacto;
    cellConsumoHora.innerHTML = consumoHora;
    cellCantidad.innerHTML = cantidad;
    cellConsumoTotal.innerHTML = consumoTotal;
    cellHorasUso.innerHTML = '<input type="number" class="horasUso" value="0">';
    cellConsumoDia.innerHTML = '0';
    cellEliminar.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

    // Agregar el artefacto a la lista para futuros cálculos
    appliances.push({ consumoHora, cantidad, consumoTotal, cellConsumoHora, cellConsumoDia });
}

function eliminarFila(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function calcular() {
    var horasUsoInputs = document.getElementsByClassName("horasUso");
    var sumaConsumoHora = 0;
    var sumaConsumoDia = 0;

    for (var i = 0; i < horasUsoInputs.length; i++) {
        var horasUso = parseInt(horasUsoInputs[i].value);
        var consumoHora = parseInt(horasUsoInputs[i].parentNode.previousElementSibling.innerHTML);
        var consumoDia = consumoHora * horasUso;
        sumaConsumoHora += consumoHora;
        sumaConsumoDia += consumoDia;
        horasUsoInputs[i].parentNode.nextElementSibling.innerHTML = consumoDia;
    }

    // Mostrar la suma total de consumo por hora fuera de la tabla
    document.getElementById("sumaPorHora").innerHTML = "Consumo total por hora: " + sumaConsumoHora + " W/h";

    // Mostrar la suma total de consumo por día fuera de la tabla
    document.getElementById("sumaPorDia").innerHTML = "Consumo total por día: " + sumaConsumoDia + " W/d";

     // Obtener los valores de los campos del formulario
 var artefactoFaltante = document.getElementById("artefactoFaltante").value;
 var nombre = document.getElementById("nombre").value;
 var email = document.getElementById("email").value;
 var edad = document.getElementById("edad").value;

 // Construir el cuerpo del correo electrónico
 var mensaje = `Nuevo artefacto faltante: ${artefactoFaltante}\n`;
 mensaje += `Nombre: ${nombre}\n`;
 mensaje += `Email: ${email}\n`;
 mensaje += `Edad: ${edad}\n`;

 // Aquí debes agregar el código para enviar el correo electrónico,
 // esto puede ser a través de un servicio de correo electrónico
 // o utilizando una librería de JavaScript para enviar correos.
 // Dependiendo de cómo desees implementarlo, puedes usar una API
 // o un servicio de backend para enviar el correo.

 // Después de enviar el correo, puedes mostrar un mensaje al usuario
 alert("¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.");
}
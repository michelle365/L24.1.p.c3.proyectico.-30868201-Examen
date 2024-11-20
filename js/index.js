 /**EXAMEN 
Se desea llevar un control de los estudiantes que 
asisten a presentar un examen. Se tiene por cada 
participante: nombre, cédula, sexo y nota. Se requiere 
de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
valor del examen y el mínimo aprobatorio.
 * 

 * Primeros requerimientos 
 *  Los datos entrada vienen en un archivo (con 
 *import... ver anexo) 
 * Porcentaje de aprobados:  66,6% retorna un calculo +
 * 
 * Porcentaje de reprobados: 33,3% retorna un calculo +
 * 
 * Estudiantes con la mejor nota : nombre: 'Carla', cedula: 2222, sexo: 'F', nota: 16.5
 * 
 * Nota promedio : 12.3
 * Chicas por encima de la nota promedio:'Carla', cedula: 2222, sexo: 'F',  nota: 16.5 (retorna array)
 */

 import Cl_estudiante from "./Cl_estudiante.js";
 import Cl_examen from "./Cl_examen.js";
 import Dt_estudiantes from "./Dt_estudiantes.js";


 const examen = new Cl_examen()

Dt_estudiantes.forEach((estudiante) => {
    examen.agregarEstudiante(
    new Cl_estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota)
    )
  }); 

 let porcentajeAprobados = (examen,salida) => {
  let aprobados = examen.porcentajeAprobados()
  salida.innerHTML = `<br> Porcentaje de Aprobados: ${aprobados}`
  
 }

 let porcentajeReprobados = (examen,salida) => {
    let reprobados = examen.porcentajeReprobados()
    salida.innerHTML = `<br> Porcentaje de Reprobados: ${reprobados}`
 }


 let mejorNota = (examen,salida) => {
    let mayor = examen.mejorNota()
   salida.innerHTML = `<br> Estudiantes con mejor Nota: ${mayor}`

 }

 let chicasEncimapromedio = (examen,salida) => {
    let chicaspro = examen.chicasEncimapromedio()
    salida.innerHTML = `<br> Chicas por encima del Promedio: ${chicaspro}`

 }

 let agregarEstudiante = (examen) => {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let cedula = prompt("Ingrese la cedula del estudiante:");
    let sexo = prompt("Ingrese el sexo del estudiante:");
    let nota = prompt ("Ingrese la nota del estudiante:")
    examen.agregarEstudiante (new Cl_estudiante (nombre, cedula, sexo, nota));
  };
  
  let eliminarEstudiante = (examen) => {
    let nombre = prompt("Ingrese nombre del estudiante a eliminar:");
    if (examen.eliminarEstudiante(nombre)) alert(`Se eliminó el estudiante ${nombre}`);
    else alert(`No existe el estudiante ${nombre}`);
  };
  
  let listarEstudiantes = (examen, salida) => {
    salida.innerHTML = "";
    examen.estudiantes.forEach((estudiante) => {
      salida.innerHTML += `<br>${estudiante.nombre}   ${estudiante.cedula}   ${estudiante.sexo}
        ${estudiante.nota}`;
    });
  };


  let salida1 = document.getElementById("salida1"),
    salida2 = document.getElementById("salida2"),
    opciones = document.getElementById("opciones");
  
  salida1.innerHTML = `<br>Seleccione una opción:
    <br>1= Agregar estudiante
    <br>2= Porcentaje de Aprobados
    <br>3= Porcentaje de Reprobados
    <br>4= Estudiantes con la mejor nota
    <br>5= Chicas por encima de la nota promedio
    <br>6= Listar estudiantes
    <br>7= Eliminar estudiante
    `;
  
  opciones.onclick = () => {
    let opcion = +prompt("Seleccione su opción:");
    switch (opcion) {
      case 1:
        agregarEstudiante(examen);
        break;
      case 2:
      porcentajeAprobados(examen, salida2);
       break;
      case 3:
       porcentajeReprobados(examen, salida2);
        break;
      case 4:
        mejorNota(examen, salida2);
        break;
      case 5:
        chicasEncimapromedio(examen, salida2);
        break;
      case 6:
        listarEstudiantes(examen, salida2);
        break;
      case 7:
        eliminarEstudiante(examen);
        break;

    }
}











export default class Cl_examen {
    constructor (valor, minAprueba){
        this.valor = valor
        this.minAprueba = minAprueba
        this.estudiantes = []
    }

    set valor (valor){
        this._valor = +valor
    }

    get valor (){
        return this._valor
    }
    
    set minAprueba(minAprueba){
      this._minAprueba = +minAprueba
    }

    get minAprueba(){
       return this._minAprueba
    }
   
    agregarEstudiante (estudiante){

        this.estudiantes.push(estudiante)
    }

    eliminarEstudiante (nombre){ 
      nombre = nombre;
    let indexNombre = -1;
    for (let i = 0; i < this.estudiantes.length; i++)
      if (this.estudiantes[i].nombre === nombre) indexNombre = i;
      if (indexNombre !== -1) this.estudiantes.splice(indexNombre, 1);
      return indexNombre !== -1;
    }
   
    porcentajeAprobados(){
        let totalestudiantes = this.estudiantes.length;
        let aprobados = this.estudiantes.filter((estudiante) => estudiante.nota >=this.minAprueba).length
        return (aprobados/totalestudiantes)*100
    }


    porcentajeReprobados(){
        let totalestudiantes = this.estudiantes.length;
        let reprobados = this.estudiantes.filter((estudiante) => estudiante.nota < this.minAprueba).length
        return (reprobados/totalestudiantes)*100
    }

    mejorNota(){
        let mayor = 0
        this.estudiantes.foreach((estudiantes) =>{
        if (estudiantes.nota > mayor) mayor = estudiantes.nota})
        return mayor
     }
     notapromedio(){
        let acum=0
        let cont=0
        this.estudiantes.foreach((estudiantes) =>{
        acum += estudiantes.nota
        cont++
        })
        return (acum/cont)
     }
     chicasEncimapromedio(){
        let mejornota = this.notapromedio()
        return this.estudiantes.filter((estudiantes) =>{
       (estudiantes.sexo == "F")  && ( estudiantes.nota > mejornota)
       }).length 
    
  }



}

    

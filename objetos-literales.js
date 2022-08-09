//TODO: lOS objetos literales y son instancias por defecto del prototipo Object, 
//sirven para estructurar datos, porque estan compuesto de atributos=keys y valores
//hereda las funcionalidades nativas, ya que es el prototipo de Object, pero nosotros
//si queremos podemos instaciar new Object, pero no es necario porque JS lo hace implicito

//COMO ESTRUCTURA DE DATOS
const persona = {
    nombre: "Mario",
    apellido: "Arango"
}

const persona2 = new Object()
persona2.nombre = "Mario"
persona2.apellido = "Arango"

console.log(persona instanceof Object)//true
console.log(persona2 instanceof Object)//true

//COMO ESTADO CON SCOPE DE OBJETO (this, function)
//Tambien se pueden añadir metodos, en caso necesitemos funcionalidad, en este paso no es
//para trabajar como estructura de datos, sino como un scope que almacena algun estado

const alumno = {
    nombre: "Mario",
    apellido: "Arango",
    cursos: ['Algebra', 'Trigo'],
    aprobarCurso(newCurso) {
        this.cursos.push(newCurso)
    },
    desaprobarCurso: function (curso) {
        this.cursos = this.cursos.filter(c => c !== curso)
    }
}

alumno.nombre = "Mario"
alumno.aprobarCurso("Rv")
alumno.desaprobarCurso("Algebra")
console.log(alumno);

//COMO ESTRUCTURA DE DATO MOMENTANEO ESTA BIEN, PERO SI QUEREMOS HACER LO MISMO SIEMPRE
//GUARDANDO ESPECIFICACIONES, NECESITAMOS UN ESQUEMA, AHI ES CUANDO SE DEJA DE USAR UN OBJETO
//LITERAL Y SE USA UNA CLASE = PROTOTIPO = FUNCION PTOTOTIPAL
//TODO: Consiste en persolalizar lo heredado
class Persona {
    dni;
    constructor(dni) {
        this.dni = dni
    }
    set dni(dni) {
        this.dni = dni
    }

    get dni() {
        return this.dni
    }
    saludar() {
        console.log('HOLA, SOY EL PADRE')
    }
}

class Student extends Persona {
    cursos = []
    constructor(dni, curso) {
        super(dni)
        this.cursos.push(curso)
        console.log(super.dni)
    }
    get cursos() {
        console.log(super.dni, "2")
        return this.cursos
    }
    set cursos(curso) {
        this.cursos.push(curso)
    }

    //USAR EL MISMO NOMBRE O DEFINICION, PERO PERSONALIZAR EL FUNCIONAMIENTO
    saludar() {
        console.log('HOLA, SOY EL HIJO')
    }

}

const mario = new Student("72935585", "algebra")
console.log(mario.saludar());

//PARA USAR LOS GET Y SETS DEBEN DEFINIRSE LOS ATRIBUTOS AL INICIO
//SUPER DENTRO DE LA CLASE HIJO NOS PERMITE USAR METODOS Y ATRIBUTOS DEL PADRE
//SI LO USAMOS COMO FUNCION HACE REFERENCIA AL CONSTRUCTOR DEL PADRE
//LOS PARAMETROS DE SUPER VAN PRIMERO EN EL CONSTRUCTOR DEL HIJO
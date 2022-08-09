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
}

const mario = new Student("72935585", "algebra")
console.log(mario.cursos);

//PARA USAR LOS GET Y SETS DEBEN DEFINIRSE LOS ATRIBUTOS AL INICIO
//SUPER DENTRO DE LA CLASE HIJO NOS PERMITE USAR METODOS Y ATRIBUTOS DEL PADRE
//SI LO USAMOS COMO FUNCION HACE REFERENCIA AL CONSTRUCTOR DEL PADRE
//LOS PARAMETROS DE SUPER VAN PRIMERO EN EL CONSTRUCTOR DEL HIJO
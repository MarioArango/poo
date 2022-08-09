//TODO: Es una forma agradable de escribir funciones prototipales en JS
//sirven para lo mismo que ellas, crear esquemas de entidades con la misma estructura
//y encapsulando logica - patron solid

//Objeeto literal es de la funcion prototipal Object, es general
//Este caso es algo particular, algo nuestro, pero la logica es similar
class Persona {
    //propiedades
    #nombre; //# hace privada y de no lectura a la propiedad
    cursos;

    constructor(nombre) {
        this.#nombre = nombre;
        this.cursos = []
    }

    //LOS GET AND SET son proxys que sirven para validad la entrada o salida
    //interceptores de uso
    set nombre(nombre) {
        this.#nombre = nombre
    }

    get nombre() {
        return this.#nombre;
    }

    set cursos(curso) {
        if (typeof curso === "string") {
            this.cursos.push(curso)
        } else {
            console.log('nada')
        }
    }

    get cursos() {
        return this.cursos
    }

    //Metodos de funcionalidad
    //es lo mismo que usar esta funcion en el prototype, solo es sintaxis bonita
    saludar() {
        console.log('hola')
    }
}

const mario = new Persona('Mario')
mario.cursos = 'algebra'
mario.cursos = 1
console.log(mario);
//EN JS TODO ES PUBLIC, NO EXISTEN MODIFICADORES DE ACCESO "encapsulamiento"
//SOLO EXISTE EL # desde ES2020 el cual es private + solo lectura
//Sin embargo una convencion es iniciar con _ para decir que sera privado aunque
//tecnicamente no sea

//CUANDO INSTANCIAMOS y enviamos parametros resulta necesario memorizar el orden
//por eso un mejor patron es el RORO, recibe objeto y devuelve objeto, es decir
//el constructor recobira un objeto con todas las propiedades que se requieran

//TODO: Este patron consiste en recibir de parametro un objeto y devolver otro objeto
//es usado en general recibiendo parametros como objetos y en custom hooks devolviendo
//el resultado como objeto, listo para desestructurar

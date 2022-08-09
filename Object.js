//TODO: Como las clases son funcion prototipales, el objeto literal es una instancia de Object
//entonces los 3, heredan de la clase padre Object, por lo tanto podemos usar sus metodos
//METODOS ESTATICOS DEL PROTOTIPO PADRE OBJECT

//USANDO METODOS DE OBJECT EN OBJETOS LITERALES
const persona = {
    nombre: "mario"
}
//Trae en una array, los atributos "clases, fn prototipales" o keys si son objetos literales
//REFERENCIA EN VALOR, si se pone this, perdera el contexto
const keys = Object.keys(persona)
// console.log(keys);

//Trae los valores de los keys o de las propiedades si son clases  o fn prototipales
//REFERENCIA EN VALOR, si se pone this, perdera el contexto
const values = Object.values(persona)
// console.log(values);

//Trae en una array, elementos arrays con dos valores, el key, propiedad y el value
//REFERENCIA EN VALOR, si se pone this, perdera el contexto
//por eso en objeetos literales se recomienda para estructura de datos y no propiedades funciones con tthis
//porque suelen perder el contexto si se aplica metodos de Object
//Solo traen los atributos o keys con enumerable=true, es decir lo que son visibles
const entries = Object.entries(persona)
// console.log(entries);

//Trae en una array, los atributos "clases, fn prototipales" o keys si son objetos literales
//Trae todas las propiedades asi tengan enumerable=false
const propiedades = Object.getOwnPropertyNames(persona)
// console.log(propiedades);

//EL PRINCIPAL, con el se crean los nodificadores de acceso, encapsulamiento
//Trae el key o propiedad con su valor, mas 3 propiedades que estaban ocultas "writable", "enumerable", "configurable"
const descriptors = Object.getOwnPropertyDescriptors(persona)
// console.log(descriptors, "descriptors");

persona.apellido = "arango" //forma de crear un nuevo atributo con configuracion por default, todo true
// persona["apellido"] // asi se usa cuando son keys dinamicos

//Crea una propiedad con valores de acceso personalizados
Object.defineProperty(persona, "edad", {
    value: 26,
    writable: false,
    enumerable: false,
    configurable: false
})
persona.edad = 27 //COMO WRITABLE ES FALSE, NO SE PUEDE EDITAR
//SI ENUMERABLE ES FALSE, NO ES VISIBLE AL IMPRIMIR EL OBJETO, PERO SI SE PUEDE OBTENER SU VALOR
delete persona.edad//CONFIGURABLE FALSE HACE QUE LA PROPIEDAD NO SE PUEDA BORRAR

//Aveces queremos qeue todas las propiedades o keys seas no borrables, entonces para no hacerlo 1x1
//Ademas hace al objeto no extensible
Object.seal(persona)
Object.isSealed(persona) //nos dice si la objeto se le aplico el metodo seal

//Para que todas las propiedades no se puedan editar y eliminar, queden congeladas en solo lectura
//Ademas hace al objeto no extensible
Object.freeze(persona)
Object.isFrozen(persona) //nos dice si la objeto se le aplico el metodo freeze
console.log(Object.getOwnPropertyDescriptors(persona), "persona")

//Asigna la referencia en memoria del primer parametro que es un objeto literal, y le copia las propiedades del 
//objeto del segundo parametro, por eso el primer parametro suele ser un objeto recien creado, para no tener efecto de lado,
//notar que si el segundo parametro que son las propiedades a copiar tienen un obj lit embebido copiara su ref en memoria
//Al la variable "p", le asignara la referencia en memoria de {saludo: "hola"} este valor heap, y copiara las propiedades
//de persona, su uso es analogo a {saludo: "hola", ...persona}, antes de que ECMA incopore el spred operator se hacia asi
const p = Object.assign({ saludo: "hola" }, persona)

//Similar al assign, con la diferencia que las propiedades las pondra en el prototypo, de modo que si se edita una de ellas,
//creara una propiedad fuera del prototipo con el mismo nombre, sucede lo mismo con obj lit embebidos, habra efecto de lado
//si se edita desde el obj principal "persona", pero no si se edita de p2", porque creara una nuevo propiedad y no alterarar,
//sin embargo no hay seguridad, porque desde persona se puede crear en efecto colateral
const p2 = Object.create(persona)

//Para solucionar esto del assign y create, se usa el spred operator ni es de un nivel, y JSON.stringify con JSON.parse
//explicado en el archivo memorias.js


//Si tiene get and set, son publicas
// si no tiene y tienen writable false y value son privadas

//en clases lo privado se ve con el # desde EC2020, o tmb se puede trabajr con obj.defineProperty en cada atributo
//Igualmente en fn prototipales, en este aos el objeto seria fn.prototype, porque el primer prototype contiene los atributos
//En fn prototipales se le puede poner get an set en los define property para tener los proxis de acceso tmb los writable y value
//para hacerlos private, esta es la forma de tener get and set en fn prototipales, porque los objetos literales y las clases
//ya tienen

//Duck Typing, es identificar de donde proviene la instancia, se usa instanceof,a demas recordar que el consstructor 
//define lo primordial para que existe la entidad









//USANDO METODOS DE OBJECT EN FUNCIONES PROTOTIPALES
function Persona2(nombre) {
    this.nombre = nombre
}
// const persona2 = new Persona2("mario")
// const keys2 = Object.keys(persona2)
// const values2 = Object.values(persona2)
// const propiedades2 = Object.getOwnPropertyNames(persona2)
// const descriptors2 = Object.getOwnPropertyDescriptors(persona2)


//USANDO METODOS DE OBJECT EN CLASES
class Persona3 {
    constructor(nombre) {
        this.nombre = nombre
    }
}
const persona3 = new Persona3("mario")
// const keys3 = Object.keys(persona3)
// const values3 = Object.values(persona3)
// const entries3 = Object.entries(persona3)
// const propiedades3 = Object.getOwnPropertyNames(persona3)
// const descriptors3 = Object.getOwnPropertyDescriptors(persona3)


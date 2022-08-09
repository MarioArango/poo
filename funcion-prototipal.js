//TODO: Cuando se necesita guardar, ordenar y condtruir muchas instancias con la misma
//estructura, es cuando se deja de usar objetos literales y se usa las clases = fn prot.

function Persona(nombre) {
    this.nombre = nombre;

    //Las fn internas no se acceder al instanciar, pero sirven como logica interna "private"
    const sal = () => {
        console.log('hola')
    }
}
//la propiedad prototype sirve para encapsular nuestros metodos y los del padre
//JS por dentro hace que podamos acceder a estas fn sin escribir pototype "public, protected"
Persona.prototype.saludar = function () {
    console.log('hola' + this.nombre)
}

//Vuelve la propiedad privada
Object.defineProperty(Persona.prototype, "nombre", {
    enumerable: false
})

const mario = new Persona('Mario')


console.log(mario);

//Internamente JS hace esto
// prototype = {
//     saludar: function () { },//propio
//     prototype: { ...prototype },//padre
// }

//Escribir asi, genera una sintexis que a larga es muy verbosa y confusa en ocasiones
//por eso se crearon las clases, que son lo mismo, pero es mas facil de escribir y entender

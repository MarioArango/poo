//TODO: FABRICA DE OBJETOS LITERALES
//ES ABSTRAER "generar objetos literales a partir de esta entidad o modelo"
//Y ENCAPSULAR, restringir el acceso de algunas propiedades o keys en el objeto literal
//instanciado

//SIMULANDO Y ENTENDIENDO INTERNAMENTE LAS CLASES

//1.---------------------------------------------------------------------------------
//TODO: OBJETO LITERAL COMO FABRICA DE OBJETOS LITERALES

//OBJETO LITERAL PADRE O ABSTRACCION O FABRICA DE OBJETOS LITERALES
const persona = {
    nombre: undefined,
    apellido: undefined,
    edad: undefined,
    extra: {
        carrera: undefined,
        especialidad: undefined
    }
}

const mario = JSON.parse(JSON.stringify(persona))

//PROPIEDADES PUBLICAS
// mario.nombre = "Mario"
// mario.apellido = "Arango"
// mario.edad = 26

//PROPIEDADES PRIVADAS
//EL ENCAPSULAMIENTO ES EXTERNO
Object.defineProperty(mario, "nombre", {
    value: "Mario",
    enumerable: false,
    writable: true,
    configurable: false
})
Object.defineProperty(mario, "apellido", {
    value: "Arango",
    enumerable: false,
    writable: true,
    configurable: false
})
Object.defineProperty(mario, "edad", {
    value: 26,
    enumerable: false,
    writable: true,
    configurable: false
})

// console.log(Object.getOwnPropertyDescriptors(mario));
// console.log(mario);

//PROPIEDADES PRIVADAS EN CASO DE TENER METODOS EN UN OBJETO LITERAL
const alumno = {
    nombre: undefined,
    saludar(msn) {
        console.log(msn)
    }
}

Object.defineProperty(alumno, "nombre", {
    value: "Mario",
    enumerable: false
})

Object.defineProperty(alumno, "saludar", {
    enumerable: false
})

// console.log(alumno.nombre);
// console.log(Object.keys(alumno));
// console.log(Object.getOwnPropertyDescriptors(alumno));

//LA FABRICA DE OBJETOS LITERALES ES MUY VERBOSO Y POCO EFICIENTE, PORQUE POR CADA INSTACIA SE DEBE CONFIGURAR TODAS LAS PROPIEDADES PRIVADAS
//POR ESO SE USAN LAS CLASES, SIN EMBARGO TMB PODEMOS TENER UNA FABRICA DE OBJETOS LITERALES QUE SEA UNA FUNCION


//2.---------------------------------------------------------------------------------
//TODO: FUNCION CON EL PATRON RORO COMO FABRICA DE OBJETOS LITERALES

const requireParam = (key) => {
    throw new Error(key + " es obligatorio")
}

function createPerson({ nombre = requireParam("nombre"), apellido = requireParam("apellido"), edad }) {

    const person = {
        nombre,
        apellido,
        edad,
        get nombre() {
            return this.nombre
        },
        set nombre(newNombre) {
            if (newNombre.length) {
                this.nombre = newNombre
            } else {
                console.log('Debe incluir un nombre')
            }
        }
    }
    //EL ENCAPSULAMIENTO ES INTERNO
    //En este caso, el value lo reemplaza por get, y el writable por set, pero si ya tienen un valor, se vera el value y writable
    //y cuando se cree otro objeeto tendra nuevamente su value y writable
    // Object.defineProperty(person, "nombre", {
    //     enumerable: false,
    //     writable: true,
    //     configurable: false
    // })

    //Si ya tiene un get y set no se puede editar con defineProperty poniendo un get y set
    Object.defineProperty(person, "apellido", {
        enumerable: false,
        writable: true,
        configurable: false
    })

    return person
}

const m = createPerson({ nombre: "Mario", apellido: "Arango" })
// const m = createPerson({ nombre: "Mario", edad: 26 })
// console.log(m);
console.log(Object.getOwnPropertyDescriptors(m));


//NAMESPACES es el alcance de las variables para que se puedan editar en el futuro "get an set"
//writeable false, evita trabajar con el polimorfismo en metodos



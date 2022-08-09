//TODO: EN JS EXISTEN DOS MEMORIAS STACK Y HEAP, el motivo de estudiarlos en POO
//es que el POO son un tipo de dato no primitivo y sus valores se almacenan en la memoria heap
//por eso es necesario conocer las memorias que participan y las referencias en valor y en memoria
//para evitar efectos colaterales

//STACK
//Almacena el nombre y el valor de la variable, solo de tipos primitivos
//Cuando se le asigna un tipo no primitivo, objetc, array, etc, se
//almacena el nombre y un hash de la variable, este hash es un identificador
//o pointer que sirve de referencia ya que en la memoria HEAP esta referencia
//estara presente encasulando todos los valores

//HEAP
//Almacena el hash y sus valores, aca se guardan estructuras de datos grandes
//del tipo no primitivo, se guardan los valores de las variables no primitivas
//previo hash que permita referenciar en la memoria heap


/**
 *     tipo de dato primitivo:           almacena el hash y sus valores
 *     almacena nombre, valor            tiene mayor capacidad de almacenamiento
 *     tipo de dato no primitivo:
 *     almacena un nombre, hash
 *    --------STACK--------          -----------------HEAP---------------
 *      nombre -> "mario"               #FtZSI6Ik -> {edad: "26", ...}
 *      apellido -> "arango"
 *      persona -> #FtZSI6Ik
 */

//Por eso no es bueno asignar variables de tipo no primitivos a otras
//porque generan un efecto de lado o colateral, siempre es bueno hacer
//referencia en valor y no en memoria, para eso se usa spred operator

//Referencia en memoria
const persona = {       //--------STACK-------    //-----HEAP-------
    nombre: "mario",    //persona -> #Fasdasd1     #Fasdasd1 -> {NOMBRE: "mario", apellido: "arango"}
    apellido: "arango"  //newPersona -> #Fasdasd1
}

const newPersona = persona

//Referencia en valor, crea un nuedo hash y copia los valores
const newPersona2 = { ...persona }  //--------STACK-------------      --------//HEAP-----------
//persona -> #Fasdasd1           Fasdasd1 -> {NOMBRE: "mario", apellido: "arango"}
//newPersona -> #Fasdasd2        Fasdasd2 -> {NOMBRE: "mario", apellido: "arango"}

//NOTAR QUE SI EN EL OBJETO HAY OTRO OBJETO ESTE HIJO SE COPIARA COMO REFERENCIA EN MEMORIA
//ASI SE HAGA EL SRED OPERATOR
const persona2 = {
    nombre: "mario",
    apellido: "arango",
    datos: {
        edad: 26,
        genero: "M"
    }
}

const p = { ...persona2 }
p.datos.edad = 27 // modificara tanto de p como de persona2, esto sucede porque se hizo
//referencia en valor del objeto de primer nivel, mas no del segundo, por lo que el del segundo
//en ambos apuntan al mismo hash y por tanto son los mismo, un cambio en uno traera efecto colateral

console.log(p, "p")
console.log(persona2, "persona2")

/**
 *   -----------STACK-------------      ------------HEAP-------------
 *      persona2 -> #Fqwrasd1               #Fqweasd1 -> {nombre: "mario", apellido: "arango", datos: #sssddd}
 *                                          #sssddd -> {edad: 26, genero: "M"}
 *      p -> #Fqweasd2                      #Fqweasd2 -> {nombre: "mario", apellido: "arango", datos: #sssddd}
 *
 */

//Como se puede ver, hizo una referencia en valor del primer nivel, mas no del segundo, por lo que en ambos
//el segundo tienen el mismo hash, de modo que un cambio en uno genera un efecto colateral en el otro

//Una forma de solucionarlo es usando el metodo estadico del prototipo JSON, JSON.stringify, este convierte 
//el objeto en un string, siempre en cuando no haya una funcion en el objeto literal a convertir
const persona3 = {
    nombre: "mario",
    apellido: "arango",
    datos: {
        edad: 26,
        genero: "M"
    }
}
const newPstr = JSON.stringify(persona3)

//Una vez convertido a string, toca pasarlo a JSON u objeto literal otra vez, de modo que al objeto de primer nivel
//u otro embebido que haya, a todos le creara una referencia en memoria nueva, evitando efectos colaterales

const newP = JSON.parse(newPstr)
newP.datos.edad = 27
console.log(persona3, "persona3")
console.log(newP, "newP")

//SE RECOMIENDA USARLO, SI HAY OBJETOS LITERALES EMBEBIDOS Y NO HAY FUNCIONES O METODOS -> OBJ LIT COMO ESTRUCTURAS
//recordar que aceptan {} o [{}...] como parametro


//DEEP COPY PARA OBJETOS LITERALES QUE TIENEN METODOS O FUNCIONES Y NO ACTUAN AL 100%
//COMO ESTRUCTURA DE DATOS


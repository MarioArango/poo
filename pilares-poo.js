//TODO: 4 PILARES DE LA POO


//1. ABSTRACCIÓN - generalizaciom
//Es la generalizacion o representacion de una entidad.
//Las clases tienen hoisting por ser funcion prototipales, por esp al separar cada clase
//en cada archivo - SOLID, el script que encapsula todo debe tener el type='module',
//de este modo las variables solo existiran en su archivo definido, por este tipo es que
//en el curso de TS salia error de variable definida.
//Recordar que el type='module' permite importar y exportar.
//La extension .mjs es moduleJS
//Funciones prototipales
//Clases

//2. ENCAPSULAMINETO - restriccion de acceso - solid
//Metodos privados, para funcionalidad interna y no acceso a usuarios que instancian
//(aunque en JS lo privado en clases no existe "private", en typescript sí), tambien para
//restringir el ingreso de datos correcto a los atributos mediante los proxis get y set.
//get y set
//namespaces
//Object.defineProperties
//Modulos de ES6

//3. HERENCIA - reutilizacion
//Al heredar podemos sobreescribir, es decir personalizar la logica de lo heredado
//Los omponentes wrapper, es una forma de hacer herencia ya que nos permite reutilizar codigo
//de la clase superior
//Herencia de funciones prototipales
//Herencia en clases

//4. POLIMORFISMO - herencia personalizada o sobreescrita
//Permite modificar o sobreescribir metodos heredado.
//Sobrecarga, Parametrico, Inclusion (JS tiene este tipo de polimorfismo):
//permite sobreescribir metodos que heredamos
//Herencia de funciones prototipales
//Herencia en clases
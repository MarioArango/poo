//TODO: Cuando una clase se crea para usar sus metodos sin previa instancia
//se una el modificador static

class Persona {
    static saludar() {
        console.log('hola')
    }
}

console.log(Persona.saludar())

//los modificadores de acceso son de TS, al igual que la clase abstracta
class Macota{
    constructor(id,nombre,raza,edad,precio,tipo){
        this.id= id
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.precio = precio 
        this.tipo = tipo
    }

    get Id(){
        return this.id
    }

    set Id(id){
        return this.id
    }

    
}

class TiendaMascota{
    constructor(){
        this.MascotaDisponible = []


    }
    agregarmascota(mascota){
        this.MascotaDisponible.push(mascota)
    }
    eliminarmascota(mascota){
        let eliminarmascota=this.MascotaDisponible.indexOf(mascota)
        if(eliminarMascota != -1){
            this.MascotaDisponible.slice(eliminarMascota, 1)
            console.log("se elimino")
        }else {
            console.log("Error")
        }
    }

    buscarMascota(){
        let mascotaEncontrada = this.MascotaDisponible.find(e=>e.id==mascota)
    }
}

class Cliente{
    constructor(nombre, dui){
        this.nombre = nombre
        this.dui = dui

    }

    get nombre Nombre(){
        return this.nombre
    }
}
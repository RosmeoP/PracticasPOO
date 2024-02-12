class books{
    constructor(title, autor){
        this.title = title
        this.autor = autor
        this.disponible = true
    }
    disponibilidad(){
        return this.disponible
    }

    taken(){
        return this.disponible = false
    }
}
    const book1 = ["Atomic Habits, James Clear "]
class customer{
    constructor(name, identificationID){
        this.name = name 
        this.identificationID = identificationID
        this.borrowedBooks = this.borrowedBooks = []
    }
    prestarLibros(libro){
        if(libro.disponibilidad){
            console.log(`Book borrow for: ${this.name}`)
            libro.taken()
            this.$borrowedBooks.push(libro)

        }
    }
}




class empleado{
    constructor(id, nombre, fechaIngreso, salario){
        this.id = id 
        this.nombre = nombre
        this.fechaIngreso = fechaIngreso
        this.salario = salario
        
    }

    calcularTiempo(){
        let fechaActual = new Date()
        let fechaYear=fechaActual.getFullYear()
        let fechaSplit = this.fechaIngreso.split("-")
        return fechaYear - fechaSplit[2]
        
    }
    



    setNombre(nombre){
        return this.nombre === nombre
        
    }

    setSalario(salario){
        return this.salario === salario
    }

    calcularBono(){
        if(this.calcularTiempo()===1){
            let bonificacion=thi.salario*0.05
            console.log("La bonificación es de: $"+bonificacion);
        } 

        else if(this.calcularTiempo()===2){
            let bonificacion=this.salario*0.1
            console.log("La bonifación es de: $"+bonificacion)
        }
    }


}

class Departamento{
    constructor(nombre){
        this.nombre = nombre
        this.empleadoList=[]
        this.gerente

    }

    agregarEmpleadoList(empleado){
        let empleadoExistente=this.empleadoList.indexOf(empleado)
        if(empleadoExistente!=-1){
            console.log("No se pude agregar un empleado dos veces");
        }
        else{
            this.empleadoList.push(empleado)
            console.log("Se agrego correctamente");
        }
        
        
    }

    calcularSalario(){
        let sumaSalario = 0
        if(this.empleadoList.length>0)
        this.empleadoList.forEach((empleado=>{
    sumaSalario+=empleado.getsaSalario()
    console.log("Suma del departamento: "+sumaSalario)}))
    }

    eliminarEmpleado(empleado){
        let posicionEmpleado=this.empleadoList.indexOf(empleado)
        if(posicionEmpleado!=-1){
            this.empleadoList.splice(posicionEmpleado,1)
            console.log("Se elimino el empleado exitosamente");
        } else{
            console.log("No se pudo encotrar el empleado")
        }
    }
}

const empleado1= new empleado(1, "Rosmeo", "01-01-2019",400) 
empleado1.setNombre("Mauricio")
empleado1.calcularTiempo()
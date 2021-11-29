class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento
    }

    mostrarGeneracion(){
        if(this.nacimiento >= 1994 && this.nacimiento <=2010){
         document.write("Pertenece a la generacion Z: su rasgo caracteristico es IRREVERENCIA" + "<br>");
        }else if(this.nacimiento >=1981 && this.nacimiento <=1993){
            document.write("Pertenece a la generacion Y: su rasgo caracteristico es FRUSTRACION" + "<br>");
        }else if(this.nacimiento >=1969 && this.nacimiento <= 1980){
            document.write("Pertenece a la generacion X: su rasgo caracteristico es OBSESION POR EL EXITO"+ "<br>");
        }else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
            document.write("Pertenece a la generacion BAVY BOOM: su rasgo caracteristico es AMBITION" + "<br>")
        }else if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            document.write("Pertenece a la generacion SILENT: su rasgo caracteristico es AUSTERIDAD"+ "<BR>")
        }
    }
   esMayorDeEdad(){
       if(this.edad >= 18){
           document.write("<br>"+ "Es mayor de edad");
       }if(this.edad < 18){
           document.write("Es menor de edad");
       }
   }
    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.dni}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Fecha de Nacimiento: ${this.nacimiento}<br>`)
    }
    
}



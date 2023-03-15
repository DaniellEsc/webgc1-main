export class InstFormal {

    id?: number;
    anio?: number;
    titulo?: String;
    cedula?: String;
    institucion_educativa?: Instituciones;
    nivel?: Niveles;
    area_estudio?: String;


}

export class Instituciones {

    id?: number;
    nombre?: String;
  }
  
  export class Niveles {
  
      
    id?: number;
   nombre?: String;
  
  
  }

  export class AreaEstudio {

    
    id?: number;
   nombre?: String;
 

}
  
  export class Estudiante{
    id?: number;
    username?: String;
    cedula?: String;
    nombres?: String;
    apellidos?: String;
    genero?: String;
    fechaNacimiento?: Date;
    ciudad?: String;
    direccion?: String;
    estadoCivil?: String;
    rutaImagen?: String;
    urlImagen?: String;
  }
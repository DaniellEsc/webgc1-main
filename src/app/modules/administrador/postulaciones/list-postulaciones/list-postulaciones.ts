export class Postulaciones {
  id: number=0;
  fecha?: Date;
  estado?: string;
  ofertalaboral_id:  number = 0;
  cedula: string = "";
}
export class Estudiante {
  id: number = 0;
  username?: string;
  cedula?: string;
  nombres?: string;
  apellidos?: string;
  genero?: string;
  fechaNacimiento?: string;
  ciudad?: string;
  direccion?: string;
  estadoCivil?: string;
  rutaImagen?: any;
  urlImagen?: any;
}

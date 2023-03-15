export class Curriculum {
  id: number = 0;
  usuario: Usuario = new Usuario();
  cedula: number = 0;
  nombres: string = "";
  apellidos: string = "";
  genero: string = "";
  fechaNacimiento: string = "";
  ciudad: Ciudad = new Ciudad();
  direccion: string = "";
  estadoCivil: string = "";
  rutaImagen: any;
  urlImagen: any;
}

export class Rol {
  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
}

export class Usuario {
  id: number = 0;
  username: string = "";
  password: string = "";
  email: string = "";
  telefono: string = "";
  estado: boolean = true;
  fechaCreacion: string = "";
  rol: string ="";
}

export class Provincia {
  id: number = 0;
  nombre: string = "";
  pais: string = "";
}

export class Ciudad {
  id: number = 0;
  nombre: string = "";
  provincia: Provincia = new Provincia();
}

export class ReferenciaProfesional {
  id?: number;
  cedula?: string;
  institucion?: string;
  nombre?: string;
  telefono?: string;
  email?: string;
}

export class ReferenciaPersonal {
  id?: number;
  cedula?: string;
  nombre?: string;
  telefono?: string;
}

export class Preferenciasempleo {
  id?: number;
  sector_empresarial?: string;
  tiempo?: string;
  salario?: string;
  cedula_estudiante?: string;
}

export class Educaciones {
  id?: number;
  anio?: number;
  titulo?: string;
  cedula?: string;
  institucion_educativa?: string;
  nivel?: string;
  area_estudio?: string;
}


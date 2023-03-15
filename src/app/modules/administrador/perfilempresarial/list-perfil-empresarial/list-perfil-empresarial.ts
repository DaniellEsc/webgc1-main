export class Empresas {
  id?: number;
  username?: string;
  sectorEmpresarial?: string;
  ruc?: string;
  nombre?: string;
  tipoEmpresa?: string;
  razonSocial?: string;
  departamento?: string;
  ciudad?: string;
  direccion?: string;
  sitioWeb?: string;

  usuario: Usuario = new  Usuario();

}

export class Usuario {
  id: number = 0;
  rol: string="";
  username?: string;
  password?: string;
  email?: string;
  telefono?: string;
  estado?: boolean;
  fechaCreacion?: Date;
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

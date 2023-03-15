export class Postulaciones {
  id: number = 0;
  fecha: Date = new Date();
  estado?: string;
  ofertaLaboral: OfertaLaboral = new OfertaLaboral();
  estudiante: Estudiante = new Estudiante();


}

export class PostulacionesPut {
  fecha: Date = new Date();
  estado: string = "";
  ofertalaboral_id: number = 0;
  cedula: string = "";
}

export class Estudiante {
  id?: number;
  usuario: Usuario = new Usuario();
  cedula: string = "";
  nombres?: string;
  apellidos?: string;
  genero?: string;
  fechaNacimiento?: Date;
  ciudad: Ciudad = new Ciudad();
  direccion?: string;
  estadoCivil?: string;
  rutaImagen?: null;
  urlImagen?: null;
}

export class Ciudad {
  id?: number;
  nombre?: string;
  provincia: Provincia = new Provincia();
}

export class Provincia {
  id?: number;
  nombre?: string;
  pais?: string;
}

export class Usuario {
  id?: number;
  rol: Rol = new Rol();
  username?: string;
  password?: string;
  email?: string;
  telefono?: string;
  estado?: boolean;
  fechaCreacion?: Date;
}

export class Rol {
  id?: number;
  nombre?: string;
  descripcion?: string;
}

export class OfertaLaboral {
  id: number = 0;
  cargo?: string;
  descripcion?: string;
  area_conocimiento?: string;
  salario?: string;
  jornada?: string;
  requisitos_academicos?: string;
  experiencia?: string;
  ubicacion?: string;
  fecha_inicio?: Date;
  fecha_fin?: Date;
  empresa: Empresa = new Empresa();
  ciudad: Ciudad = new Ciudad();
}

export class Empresa {
  id?: number;
  usuario?: Usuario;
  sectorEmpresarial?: Rol;
  ruc?: string;
  nombre?: string;
  tipoEmpresa?: string;
  razonSocial?: string;
  departamento?: string;
  ciudad?: Ciudad;
  direccion?: string;
  sitioWeb?: string;
}

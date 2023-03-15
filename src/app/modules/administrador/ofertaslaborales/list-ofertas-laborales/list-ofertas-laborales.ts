export interface OfertaLaboral {
  id?: number;
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
  empresa?: string;
  ciudad?: string;
}
/*
export class OfertaLaboral {
  id: number = 0;
  cargo: string = "";
  requisitos_academicos: string = "";
  descripcion: string = "";
  ubicacion: string = "";
  sectorEmpresarial: string = "";
  ciudad: string = "";
  jornada: string = "";
  areaConocimiento: string = "";
  fechaIniConv: string = "";
  fechaFinConv: string = "";
  empresa: String = "";
}*/

export class OfertasClase {
  id: number = 0;
  cargo: string = "";
  descripcion: string = "";
  area_conocimiento: string = "";
  salario: string = "";
  jornada: string = "";
  requisitos_academicos: string = "";
  experiencia: string = "";
  ubicacion: string = "";
  fecha_inicio: string = "";
  fecha_fin: string = "";
  empresa: Empresa = new Empresa();
  ciudad: Ciudad2 = new Ciudad2();
}


export class Rol {
  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
}

export class Usuario {
  id: number = 0;
  rol: Rol = new Rol();
  username: string = "";
  password: string = "";
  email: string = "";
  telefono: string = "";
  estado: boolean = true;
  fechaCreacion: string = "";
}

export class SectorEmpresarial {
  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
}

export class Provincia {
  id: number = 1;
  nombre: string = "";
  pais: string = "";
}

export class Ciudad {
  id: number = 1;
  nombre: string = "";
  provincia: Provincia = new Provincia();
}

export class Empresa {
  id: number = 0;
  usuario: Usuario = new Usuario();
  sectorEmpresarial: SectorEmpresarial = new SectorEmpresarial();
  ruc: string = "";
  nombre: string = "";
  tipoEmpresa: string = "";
  razonSocial: string = "";
  departamento: string = "";
  ciudad: Ciudad = new Ciudad();
  direccion: string = "";
  sitioWeb: string = "";
}

export class Provincia2 {
  id: number = 0;
  nombre: string = "";
  pais: string = "";
}

export class Ciudad2 {
  id: number = 0;
  nombre: string = "";
  provincia: Provincia2 = new Provincia2();
}

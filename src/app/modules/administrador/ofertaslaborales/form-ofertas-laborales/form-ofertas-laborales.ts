export class Ofertas {
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

export class Ciudad {
  id?: number;
  nombre?: string;
  provincia?: Provincia;
}

export class Provincia {
  id?: number;
  nombre?: string;
  pais?: string;
}

export class Empresa {
  id: number = 0;
  usuario: Usuario = new Usuario();
  sectorEmpresarial: SectorEmpresarial = new SectorEmpresarial();
  ruc?: string;
  nombre?: string;
  tipoEmpresa?: string;
  razonSocial?: string;
  departamento?: string;
  ciudad: Ciudad =new Ciudad();
  direccion?: string;
  sitioWeb?: string;
}

export class SectorEmpresarial {
  id?: number;
  nombre?: string;
  descripcion?: string;
}

export class Usuario {
  id?: number;
  rol?: SectorEmpresarial;
  username?: string;
  password?: string;
  email?: string;
  telefono?: string;
  estado?: boolean;
  fechaCreacion?: Date;
}


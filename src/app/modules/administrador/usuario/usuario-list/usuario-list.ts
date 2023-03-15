export class Usuario {
  id: number = 0;
  username: string = "";
  password: string = "";
  email: string = "";
  telefono: string = "";
  estado: boolean = false;
  fechaCreacion: Date = new Date();
  rol: string = "";
}

export class Rol {
  id: number = 0;
  nombre: string = "";
  descripcion: string = "";
}

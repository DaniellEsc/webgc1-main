
export class Postulacion {
    id?: number;
    fecha?: Date;;
    estado?: String;
    ofertalaboral_id?: number;
    cedula?: string;


    constructor(ofertalaboral_id?: number, cedula?: string, estado?: String) {
        this.ofertalaboral_id= ofertalaboral_id;
        this.cedula= cedula;
        this.estado= estado;
        }




}
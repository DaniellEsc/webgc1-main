import {Component, OnInit} from '@angular/core';
import {isNumber} from '@ng-bootstrap/ng-bootstrap/util/util';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {EstudianteService} from '../services/estudiante.service';
import {RefPersonales} from './modelos/ref-personales';
import {RefPersonalesService} from './servicios/ref-personales.service';

@Component({
  selector: 'app-ref-personales',
  templateUrl: './ref-personales.component.html',
  styleUrls: ['./ref-personales.component.css']
})
export class RefPersonalesComponent implements OnInit {

  arrayTabla:any []=[];
  datosTab:any;
  referencia_id : any;
  cedulaUsuario:any;
  nombresdatos:any;
  telefonodatos:any;

  referenciaPer: RefPersonales = new RefPersonales;
  public estudiante_id: number;

  constructor(private serviceReferencia: RefPersonalesService,
              private route: ActivatedRoute,
              private router: Router) {

    this.estudiante_id =  this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.cedulaUsuario=localStorage.getItem('cedulaPerfil')
    this.ObTabRef();

  }

  guardardatos(){
    if(this.nombresdatos === undefined){

      Swal.fire({
        icon: 'error',
        text: 'Llene todos los campos por favor'
      });

    }else{

      if( this.telefonodatos === undefined){
        Swal.fire({
          icon: 'error',
          text: 'Llene todos los campos por favor'
        });

      }else{
        if(isNaN(this.telefonodatos)){
          Swal.fire({
            icon: 'error',
            text: 'SOLO NUMEROS '
          });

        }else{

          this.referenciaPer.cedula=this.cedulaUsuario
          this.referenciaPer.nombre=this.nombresdatos
          this.referenciaPer.telefono=this.telefonodatos
          console.log(this.referenciaPer)
          this.serviceReferencia.postRefPer(this.referenciaPer).subscribe(dat => {
            this.arrayTabla=[]
            this.ObTabRef()
            this.Campos()

          })
        }
      }
    }
  }

  ObTabRef(){
    this.referenciaPer.cedula=this.cedulaUsuario
    this.serviceReferencia.getTabla().subscribe(datTab =>{
      this.datosTab=datTab;
      for(var datarray in datTab){
        if(datTab[datarray].cedula == this.referenciaPer.cedula){
          this.arrayTabla.push(datTab[datarray])
        }
      }
    })
  }


  EliminarTab(id:any){

    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podrás revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceReferencia.ElimirRef(id).subscribe(result =>{
          Swal.fire('Registro Eliminado', '', 'info');
          this.arrayTabla=[]
          this.ObTabRef()
        });

      }
    })
  }


  Actualizar(datoRefPer:any){
    this.referenciaPer.id=datoRefPer.id
    this.nombresdatos=datoRefPer.nombre
    this.telefonodatos=datoRefPer.telefono
  }

  guardarEdit(){
    this.referenciaPer.nombre=this.nombresdatos
    this.referenciaPer.telefono=this.telefonodatos
    this.serviceReferencia.ActualizarRef(this.referenciaPer).subscribe( datos =>{
      console.log(datos)
      this.arrayTabla=[]
      this.ObTabRef()

      this.Campos()
      Swal.fire({
        icon: 'success',
        text: 'Datos Actualizados'
      });

    })
  }

  Campos(){

    this.nombresdatos = null
    this.telefonodatos = null
  }

}

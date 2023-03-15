import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ESTADO_CIVIL_OPCIONES } from 'src/app/data/constants/ui/estado-civil-select.const';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';
import { EstudianteService } from '../services/estudiante.service';
import { UploadFilesService } from '../services/imagenes/upload-files.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  //imagenes//
  public previsualizacion?: string;
  public archivos: any = []
  public loading?: boolean
  public rutaimagen: string = '';
  public urlImage: string = '';
  public inforest: any = [];
  public getRuta: string = '';
  public deleteimage:any = localStorage.getItem('rutaimagen');


  //-----------//
  public ciudades: ICiudad[] = [];
  public estadosCivil = ESTADO_CIVIL_OPCIONES;
  public estudiante_id: number;
  public estudiante: IEstudiante | any = {/*     nombres: '',apellidos: '' */ };
  public cedulaValidator = true;

  constructor(private route: ActivatedRoute, private ciudadService: CiudadService,
    private estudianteService: EstudianteService,
    private authService: AuthService,
    private router: Router,
    private uploadFilesService: UploadFilesService,
    private sanitizer: DomSanitizer) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.ciudadService.getAll().subscribe(d => {
      this.ciudades = d;
    })
    this.estudiante.username = this.authService.getUser().username;
    console.log(this.estudiante);
    if (this.estudiante_id) {
      this.estudianteService.getSummaryByEstudianteId(this.estudiante_id).subscribe(r => {
        this.estudiante = r;
        this.estudiante.urlImagen = localStorage.getItem('urlimage');
        this.estudiante.rutaImagen = localStorage.getItem('rutaimagen');
        this.getRuta = this.estudiante.rutaImagen;
        console.log(this.getRuta);
        console.log(this.estudiante)
      })
    }
  }

  registrarEstudiante() {
    if (this.urlImage === '' && this.rutaimagen === '') {
      console.log("no se modifico la foto")

      this.estudiante.urlImagen = localStorage.getItem('urlimage');
      this.estudiante.rutaImagen = localStorage.getItem('rutaimagen');
    } else {
      this.estudiante.urlImagen = this.urlImage
      this.estudiante.rutaImagen = this.rutaimagen
      console.log("nueva foto")
    }

    if (this.estudiante_id) {
      // actualizamos
      this.estudianteService.edit(this.estudiante_id, this.estudiante).subscribe(r => {
        console.log('🎑Actualizando...');
        this.response(r.error, r.icon, r.message);
      })

    } else {
      this.estudiante.urlImagen = this.urlImage
      this.estudiante.rutaImagen = this.rutaimagen
      this.estudianteService.save(this.estudiante).subscribe(
        r => {
          this.response(r.error, r.icon, r.message);
        }
      )
    }

  }

  response(state: boolean, icon: any, text: any) {
    Swal.fire({
      icon: icon,
      text: text
    })
    if (!state) {
      this.router.navigateByUrl('/panel/estudiante');
    }
  }

  validateCedula(cedula: string) {
    let rightCedula = false;
    if (cedula.length == 10) {

      let thirdDigit = parseInt(cedula.substring(2, 3));
      if (thirdDigit < 6) {
        let coefValCedual = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verifier = parseInt(cedula.substring(9, 10));
        let sum: number = 0;
        let digit: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digit = parseInt(cedula.substring(i, i + 1)) * coefValCedual[i];
          sum += ((parseInt((digit % 10) + '') + (parseInt((digit / 10) + ''))));
        }
        sum = Math.round(sum);
        if ((Math.round(sum % 10) == 0) && (Math.round(sum % 10) == verifier)) {
          rightCedula = true;
        } else if ((10 - (Math.round(sum % 10))) == verifier) {
          rightCedula = true;
        } else {
          rightCedula = false;
        }
      } else {
        rightCedula = false;
      }

    } else {
      rightCedula = false;
    }
    this.cedulaValidator = rightCedula;
  }



  //-------------------------------------------------------------------------//

  capturarFile(event: any): any {

    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    // 
    // console.log(event.target.files);
  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  }
  )


  /**
  * Limpiar imagen
  */

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }




  subirArchivo(): any {
    this.loading = true;
    const formularioDeDatos = new FormData();
    this.archivos.forEach((archivo: string | Blob) => {
      formularioDeDatos.append('multipartFile', archivo)
    })

    this.uploadFilesService.post(`http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/assets/upload`, formularioDeDatos)
      .subscribe(res => {
        this.loading = false;
        console.log('Respuesta del servidor', res);
        this.inforest = res;
        console.log(this.inforest);
        this.rutaimagen = this.inforest.key
        this.urlImage = this.inforest.url
        console.log(this.rutaimagen);
        console.log(this.urlImage);
        Swal.fire({
          icon: 'success',
          text: 'Foto cargada, pulse registrar para aplicar los cambios'
        });



      }, () => {
        this.loading = false;
        alert('Error');
      })

  }






  //----------------------------------------------------------------//

deleteFile(rutakey: string){
this.uploadFilesService.delete(rutakey).subscribe(r=>{
  console.log("archivo eliminado")
} )
}







}

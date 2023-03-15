import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { TIPOS_EMPRESAS } from 'src/app/data/constants/ui/tipos-empresas';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import { ISectorEmpresarial } from 'src/app/data/interfaces/models/isector-empresarial';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
import { AuthService } from '../../auth/services/auth.service';
import { EmpresaService } from '../services/empresa.service';
import { SectorEmpresarialService } from '../services/sector-empresarial.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  public ciudades: ICiudad[] = [];
  public sectoresEmpresariales: ISectorEmpresarial[] = [];
  public tiposEmpresas = TIPOS_EMPRESAS;
  public empresa: IEmpresa | any = {};
  public empresa_id: number;
  public rucAlert: string = '';

  constructor(private route: ActivatedRoute,
    private ciudadService: CiudadService,
    private sectorEmpresService: SectorEmpresarialService,
    private authService: AuthService,
    private router: Router,
    private empresaService: EmpresaService) {

    this.empresa_id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getCiudades();
    this.getSectoresEmpresariales();

    this.empresa.username = this.authService.getUser().username;
    if (this.empresa_id) {
      //cargamos la empresa por ID
      this.empresaService.getSummaryByEmpresaId(this.empresa_id).subscribe(d => {
        this.empresa = d;
      })
    }
  }

  registrarEmpresa() {
    if (this.empresa_id) {

      this.empresaService.edit(this.empresa_id, this.empresa).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa');
      })

    } else {
      this.empresaService.save(this.empresa).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa');
      })
    }

  }

  getCiudades() {
    this.ciudadService.getAll().subscribe(d => {
      this.ciudades = d;
    })
  }

  getSectoresEmpresariales() {
    this.sectorEmpresService.getAll().subscribe(d => {
      this.sectoresEmpresariales = d;
    })
  }

  validateRUC(ruc: string) {

    let numero = ruc ? ruc : '';
    /* alert(numero); */

    var suma = 0;
    var residuo = 0;
    var pri = false;
    var pub = false;
    var nat = false;
    var numeroProvincias = 24;
    var modulo = 11;

    /* Verifico que el campo no contenga letras */
    var ok = 1;
    for (let i = 0; i < numero.length && ok == 1; i++) {
      var n = parseInt(numero.charAt(i));
      if (isNaN(n)) ok = 0;
    }
    if (ok == 0) {
      this.rucAlert = "No puede ingresar caracteres en el número";
      return false;
    }

    if (numero.length < 10) {
      this.rucAlert = 'El número ingresado no es válido';
      return false;
    }

    /* Los primeros dos digitos corresponden al codigo de la provincia */
    let provincia = numero.substring(0, 2);
    if (parseInt(provincia) < 1 || parseInt(provincia) > numeroProvincias) {
      this.rucAlert = 'El código de la provincia (dos primeros dígitos) es inválido';
      return false;
    }

    /* Aqui almacenamos los digitos de la cedula en variables. */
    const d1 = numero.substr(0, 1);
    const d2 = numero.substr(1, 1);
    const d3 = numero.substr(2, 1);
    const d4 = numero.substr(3, 1);
    const d5 = numero.substr(4, 1);
    const d6 = numero.substr(5, 1);
    const d7 = numero.substr(6, 1);
    const d8 = numero.substr(7, 1);
    const d9 = numero.substr(8, 1);
    const d10 = numero.substr(9, 1);

    /* El tercer digito es: */
    /* 9 para sociedades privadas y extranjeros   */
    /* 6 para sociedades publicas */
    /* menor que 6 (0,1,2,3,4,5) para personas naturales */

    if (parseInt(d3) == 7 || parseInt(d3) == 8) {
      this.rucAlert = 'El tercer dígito ingresado es inválido';
      return false;
    }

    /* Solo para personas naturales (modulo 10) */
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 0, p7 = 0, p8 = 0, p9 = 0;
    if (parseInt(d3) < 6) {
      nat = true;
      p1 = parseInt(d1) * 2; if (p1 >= 10) p1 -= 9;
      p2 = parseInt(d2) * 1; if (p2 >= 10) p2 -= 9;
      p3 = parseInt(d3) * 2; if (p3 >= 10) p3 -= 9;
      p4 = parseInt(d4) * 1; if (p4 >= 10) p4 -= 9;
      p5 = parseInt(d5) * 2; if (p5 >= 10) p5 -= 9;
      p6 = parseInt(d6) * 1; if (p6 >= 10) p6 -= 9;
      p7 = parseInt(d7) * 2; if (p7 >= 10) p7 -= 9;
      p8 = parseInt(d8) * 1; if (p8 >= 10) p8 -= 9;
      p9 = parseInt(d9) * 2; if (p9 >= 10) p9 -= 9;
      modulo = 10;
    }

    /* Solo para sociedades publicas (modulo 11) */
    /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
    else if (parseInt(d3) == 6) {
      pub = true;
      p1 = parseInt(d1) * 3;
      p2 = parseInt(d2) * 2;
      p3 = parseInt(d3) * 7;
      p4 = parseInt(d4) * 6;
      p5 = parseInt(d5) * 5;
      p6 = parseInt(d6) * 4;
      p7 = parseInt(d7) * 3;
      p8 = parseInt(d8) * 2;
      p9 = 0;
    }

    /* Solo para entidades privadas (modulo 11) */
    else if (parseInt(d3) == 9) {
      pri = true;
      p1 = parseInt(d1) * 4;
      p2 = parseInt(d2) * 3;
      p3 = parseInt(d3) * 2;
      p4 = parseInt(d4) * 7;
      p5 = parseInt(d5) * 6;
      p6 = parseInt(d6) * 5;
      p7 = parseInt(d7) * 4;
      p8 = parseInt(d8) * 3;
      p9 = parseInt(d9) * 2;
    }

    suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
    residuo = suma % modulo;

    /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
    const digitoVerificador = residuo == 0 ? 0 : modulo - residuo;

    /* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/
    if (pub == true) {
      if (digitoVerificador != parseInt(d9)) {
        this.rucAlert = 'El RUC de la empresa del sector público es incorrecto.';
        return false;
      }
      /* El ruc de las empresas del sector publico terminan con 0001*/
      if (numero.substr(9, 4) != '0001') {
        this.rucAlert = 'El RUC de la empresa del sector público debe terminar con 0001';
        return false;
      }
    }
    else if (pri == true) {
      if (digitoVerificador != parseInt(d10)) {
        this.rucAlert = 'El RUC de la empresa del sector privado es incorrecto.';
        return false;
      }
      if (numero.substr(10, 3) != '001') {
        this.rucAlert = 'El RUC de la empresa del sector privado debe terminar con 001';
        return false;
      }
    }

    else if (nat == true) {
      if (digitoVerificador != parseInt(d10)) {
        this.rucAlert = 'El número de cédula de la persona natural es incorrecto.';
        return false;
      }
      if (numero.length > 10 && numero.substr(10, 3) != '001') {
        this.rucAlert = 'El RUC de la persona natural debe terminar con 001';
        return false;
      }
    }
    return true;
  }

}

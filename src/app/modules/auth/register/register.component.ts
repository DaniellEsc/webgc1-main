import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';
import Swal from 'sweetalert2';
import { PassRoleService } from '../services/pass-role.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*   public usuario: Iusuario = {
      username: '',
      password: '',
      email: '',
      telefono: '',
      estado: true,
      rol: ''
    }; */

  rolReceived: string = '';

  public registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private passRoleService: PassRoleService,
    private router: Router,
    private usuarioSerive: UsuarioService) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      estado: [true],
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    /*     this.passRoleService.roleTrigger.subscribe(data => {
          console.log('ROLE 🎋', data);
          this.rolReceived = data.data;
          this.usuario.rol = this.rolReceived
          this.registerForm.get('rol')?.setValue(this.usuario.rol);
          console.log('Subscribe action', this.registerForm.value);
    
        }) */
    /*     console.log('Out Subscribe action', this.registerForm.value); */
    this.rolReceived = this.passRoleService.getRol();
    console.log(this.rolReceived);
    this.registerForm.get('rol')?.setValue(this.rolReceived);

  }

  register() {

    if (!this.registerForm.valid) {
      return;
    }

    this.usuarioSerive.signUp(this.registerForm.value).subscribe(r => {

      console.log('Registered🎁', this.registerForm.value);
      Swal.fire({
        icon: r.icon,
        text: r.message
      })
      if (!r.error) {
        this.router.navigateByUrl('/home');
      }

    });

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { PassRoleService } from '../services/pass-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() role: string = '';

  /*   public loginForm: Ilogin = {
      username: '',
      password: ''
    }; */
  public loginForm: FormGroup;
  public loginSubmitted = true;
  public session: string = '';


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private passRoleService: PassRoleService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  identifySession(): void {

    switch (this.role) {
      case 'ROLE_ESTUDIANTE':
        this.session = "estudiante";
        break;
      case 'ROLE_EMPRESA':
        this.session = 'empresa';
        break
      case 'ROLE_ADMINISTRADOR':
        this.session = 'administrador';
    }
  }

  /*   isValidForm() {
      return (this.loginForm.username.length > 0 && this.loginForm.password.length > 0);
    } */

  cleanForm() {
    this.loginSubmitted = true;
    this.loginForm.get('username')?.setValue('');
    this.loginForm.get('password')?.setValue('');
  }

  get fm() {
    return this.loginForm.controls;
  }

  authenticate() {


    this.identifySession();
    console.log('Session', this.session);

    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('🧧Data received', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(r => {
      if (r.error) {
        this.cleanForm();
        Swal.fire({
          icon: 'info',
          text: `${r.message}`
        })
      } else {
        if (r.data?.authorities[0]?.authority == this.role) {
          this.router.navigateByUrl(`/panel/${this.session}`);
        } else {
          Swal.fire({
            icon: 'error',
            text: 'El usuario ingresado no pertence a este rol'
          })
        }
      }


      console.log(r);
    });

  }

  register() {
    this.passRoleService.setRol(this.role);
    this.passRoleService.roleTrigger.emit({
      data: this.role
    });
  }

}

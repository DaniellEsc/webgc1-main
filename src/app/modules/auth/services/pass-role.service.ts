import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassRoleService {
  public rol: string = '';
  @Output() roleTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }

  setRol(message: string) {
    this.rol = message;
  }
  getRol() {
    return this.rol;
  }
}

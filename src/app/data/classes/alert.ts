import { Router } from "@angular/router";
import Swal from "sweetalert2";

export class Alert {

  constructor(private state: boolean, private icon: any, private text: any,
    private router?: Router) {

  }


  response(redirectTo: string) {
    Swal.fire({
      icon: this.icon,
      text: this.text
    })
    if (!this.state) {
      this.router?.navigateByUrl(redirectTo);
    }
  }

  onlyShowAlert() {
    Swal.fire({
      icon: this.icon,
      text: this.text
    })
  }
}

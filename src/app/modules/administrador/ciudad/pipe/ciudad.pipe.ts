import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciudad'
})
export class CiudadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCiudad = [];
    if (arg === '' || arg.length < 3) return value;
    for (const ciudad of value) {
      if (ciudad.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        ciudad.provincia.toLowerCase().indexOf(arg.toLowerCase()) > -1) {

        resultCiudad.push(ciudad);

      }
    }
    return resultCiudad;
  }

}

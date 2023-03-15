import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listHojasVida'
})
export class ListHojasVidaPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.cedula.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.nombres.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.apellidos.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.genero.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.ciudad.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.direccion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.estadoCivil.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}

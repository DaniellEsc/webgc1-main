import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofertasLaborales'
})
export class OfertasLaboralesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.empresa.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.cargo.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.descripcion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.jornada.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.experiencia.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.ubicacion.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}

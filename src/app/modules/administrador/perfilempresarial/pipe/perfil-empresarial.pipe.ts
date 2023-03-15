import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'perfilEmpresarial'
})
export class PerfilEmpresarialPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for (const post of value) {
      if (
        (post.username.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.sectorEmpresarial.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.ruc.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.tipoEmpresa.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.razonSocial.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.direccion.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.sitioWeb.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.ciudad.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }
}

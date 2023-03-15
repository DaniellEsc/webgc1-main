import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioList'
})
export class UsuarioListPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.username.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.email.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.telefono.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.rol.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }


}

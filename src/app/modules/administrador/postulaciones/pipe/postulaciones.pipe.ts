import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postulacionespipe'
})
export class PostulacionesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for (const post of value) {
      if (
        (post.estado.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.cedula.toLowerCase().indexOf(args.toLowerCase()) > -1)
      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'provincia'
})
export class ProvinciaPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPost = [];
    for(const post of value){
      if (
        (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) ||
        (post.pais.toLowerCase().indexOf(args.toLowerCase()) > -1)

      ) {
        resultPost.push(post);
      }
    }
    return resultPost;
  }
}

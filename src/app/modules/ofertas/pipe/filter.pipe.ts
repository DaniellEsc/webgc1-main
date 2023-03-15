import { Pipe, PipeTransform } from '@angular/core';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ofertas: IOferta[], search:string=''): IOferta[]{
if(  search==''  ||search.length==0)return ofertas;

const filter = ofertas.filter(ofe => ofe.cargo.includes(search));

for(const post of ofertas){
if(post.cargo.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
filter.push(post);
};
if(post.empresa.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
  filter.push(post);
  };

  if(post.jornada.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
    filter.push(post);
    };
    if(post.area_conocimiento.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
      filter.push(post);
      };
      if(post.salario.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
        filter.push(post);
        };
        if(post.ciudad.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
          filter.push(post);
          };

};




return filter;
  }






}

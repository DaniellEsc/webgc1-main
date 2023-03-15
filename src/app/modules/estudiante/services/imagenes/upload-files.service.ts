import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const FILES_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/assets/';
@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private http: HttpClient) { }

  upload(multipartFile:File): Observable<HttpEvent<any>>{
  
    const formData: FormData = new FormData();
    formData.append('multipartFile', multipartFile);
     const req = new HttpRequest ('POST', `${FILES_API}upload/`, formData, {
     reportProgress: true,
     responseType:'json'
     });
     return this.http.request(req);
  }
  
  getFile(filename:string){
    return this.http.get( `${FILES_API}get-object/${filename} `);
  }
  
  delete(filename: string){
    return this.http.get(  `${FILES_API}delete-object/${filename} `);
  }
  
  public post(url:string, body:any){
    return this.http.post(url,body); // POST  
  }
}

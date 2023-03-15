import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { ERRORS_CONST } from 'src/app/data/constants/errors/errors.const';
import { IApiAuthUserMetadataTs } from 'src/app/data/interfaces/api/iapi-auth-user.metadata.ts';
import { Ilogin } from 'src/app/data/interfaces/models/ilogin';

const AUTH_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IApiAuthUserMetadataTs | null>;
  public usernameLS = 'currentUser';

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.usernameLS)!)
    );
  }

  getUser(): IApiAuthUserMetadataTs {
    return this.currentUser.value!;
  }

  login(data: Ilogin): Observable<any> {

    const response = { error: true, message: ERRORS_CONST.LOGIN.ERROR, data: null };

    return this.http.post<any>(`${AUTH_API}/login`, data).pipe(
      map(r => {
        response.error = false;
        response.message = "Welcome 🧨";
        response.data = r;
        this.setUserLocalStorage(r);
        this.currentUser.next(r);
        return response;
      }),
      catchError(e => {
        return of(response);
      })
    );

  }

  logout() {
    localStorage.removeItem(this.usernameLS);
    this.currentUser.next(null);
    this.router.navigateByUrl("/home");
  }

  private setUserLocalStorage(user: IApiAuthUserMetadataTs) {
    localStorage.setItem(this.usernameLS, JSON.stringify(user));
  }
}

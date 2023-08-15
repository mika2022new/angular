import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environment";
import {FbAuthResponse, User} from "../../../shared/inerfaces";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  get token(): string {
    return ''
  }

  login(user: { password: any; email: any }): Observable<any> {
    // user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apikey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FbAuthResponse) {
    console.log(response)
  }
}


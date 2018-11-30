import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Defined} from '../../app/defined';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';


@Injectable()
export class LoginService {
  private loginUrl = Defined.AuthServerUrl + '/api/login';
  constructor(private http: Http){}

/*  login(username, password): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = {headers: headers};
    const body = Defined.public_param();
    body.user = username;
    body.pass = password;
    return this.http.post(this.loginUrl, body, {});
  }*/
  login(username, password): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    // let body = {username: username, password: password};

    let body = Defined.public_param();

    body.user = username;
    body.pass = password;
    console.log(body)

    return this.http.post(this.loginUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body;
    if (res.status === 200) {
      body = res.json() || {};
    }
    else {
      body = {};
    }
    body.resStatus = res.status;
    return body;
  }

  private handleError(error: Response | any) {
    return error;
  }


}

import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CrudService {

  constructor(private http: Http) { }

  private dependentUrl = 'http://localhost:3000/dependent';
  private addressUrl = 'http://localhost:3000/address';
  private authUrl = 'http://localhost:3000/auth'
  
  @Output() open: EventEmitter<any> = new EventEmitter();

  getDependent() {
    return this.http.get(this.dependentUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAddress() {
    return this.http.get(this.addressUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  authenticate(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.authUrl, data, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  validateJWT() {
    let jwtUrl = 'http://localhost:3000/validate';
    let retrievedObject = JSON.parse(localStorage.getItem('testObject'));
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': retrievedObject });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(jwtUrl, options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

   extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

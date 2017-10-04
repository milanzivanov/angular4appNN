import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  // private _url = '../assets/ninjas.json';  // URL to web api
  constructor(private _http: Http) { }

  fetchData() {
    console.log('sending to 111');
    // // work 1
    //   return this._http.get('https://a2app-ce5de.firebaseio.com/.json').map  ((res) => res.json()
    //   );
    // work 2 :)
    // return this._http.get(this._url);
  }

}

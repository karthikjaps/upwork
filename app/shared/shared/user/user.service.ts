import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Storage, LocalStorage } from 'ionic-angular';

import { User } from './user.schema';

const AUTH_USER = {
  username: 'demo',
  password: 'demo'
};

@Injectable()
export class UserService {

  private storage: Storage;

  constructor(private http: Http) {
    this.storage = new Storage(LocalStorage);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage.getJson('user').then((res) => {
        let isAuthenticated = !!res;
        resolve(isAuthenticated);
      }, (err) => {
        reject('No records found!.')
      });
    })
  }

  doLogin(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (
        AUTH_USER[ 'username' ] == username
        && AUTH_USER[ 'password' ] == 'demo') {
        this.storage.setJson('user', AUTH_USER);
        resolve(true)
      } else {
        reject('Not a valid credentials');
      }
    })
  }

  doLogout() {
    return new Promise((resolve, rejct) => {
      this.storage.remove('user')
        .then((res) => resolve(!!res))
        .catch((errRes) => rejct(errRes))
    })
  }

  getUserData() {
    return this.http.get('https://api.github.com/users')
      .map(res => <Array<User>>(res.json()));
  }
}

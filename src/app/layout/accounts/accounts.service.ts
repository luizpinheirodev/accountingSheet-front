import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Account} from './accounts.model';

import {Observable, throwError} from 'rxjs';
import {Coop} from '../coop/coop.model';
import {Router} from '@angular/router';


export class AccountsService {


  constructor(private router: Router) {

  }


  navigateToSummary(number: String) {
    //this.router.navigate([`accounts/${number}`]);
  }
}

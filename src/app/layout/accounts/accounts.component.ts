import {Component, OnInit} from '@angular/core';
import {Account} from './accounts.model';
import {AccountsService} from './accounts.service';
import {ActivatedRoute} from '@angular/router';
import {AppApiService} from '../../services/app-api.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private service: AppApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getAccounts(this.route.snapshot.params['number']).subscribe(account => this.accounts = account);
  }

  goToSheet(number: string) {
    
  }
}

import {Router} from '@angular/router';

export class DashboardService {

  constructor(
    private router: Router
  ) {

  }

  navigateToAccounts(number: string) {
    this.router.navigate([`contas/${number}`]);
  }

}

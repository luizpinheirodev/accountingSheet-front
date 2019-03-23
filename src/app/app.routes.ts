import {Routes} from '@angular/router';
import {BalanceComponent} from './layout/balance/balance.component';
import {CoopComponent} from './layout/coop/coop.component';


export const ROUTES: Routes = [
  {path: '', component: BalanceComponent},
  {path: 'coops', component: CoopComponent}
];

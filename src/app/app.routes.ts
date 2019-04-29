import {Routes} from '@angular/router';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {CoopComponent} from './layout/coop/coop.component';
import {AccountsComponent} from './layout/accounts/accounts.component';
import {UploadComponent} from './upload/upload.component';


export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'coops', component: CoopComponent},
  {path: 'contas/:number', component: AccountsComponent},
  //{path: 'contas', component: AccountsComponent},
  {path: 'importar', component: UploadComponent},
//  {path: 'upload_Old-file', loadChildren: './upload_Old-file/upload_Old-file.module#UploadFileModule' },
  //{path: 'upload_Old-file', component: UploadFileComponent}

  //{path: 'upload_Old-file', loadChildren: () => UploadFileModule}

];

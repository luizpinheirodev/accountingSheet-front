import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/components/header/header.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {CoopComponent} from './layout/coop/coop.component';
import {CoopService} from './layout/coop/coop.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {CoopListComponent} from './layout/coop/coop-list/coop-list.component';
import {AccountsComponent} from './layout/accounts/accounts.component';
import {AccountsService} from './layout/accounts/accounts.service';
import {AppApiService} from './services/app-api.service';
import {SheetComponent} from './layout/sheet/sheet.component';
import {FileSelectDirective, FileUploadModule} from 'ng2-file-upload';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    DashboardComponent,
    CoopComponent,
    UploadComponent,
    DetailsUploadComponent,
    SheetComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    FileUploadModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CoopService, AppApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { BalanceComponent } from './layout/balance/balance.component';
import { CoopComponent } from './layout/coop/coop.component';
import {CoopService} from './layout/coop/coop.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { CoopListComponent } from './layout/coop/coop-list/coop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BalanceComponent,
    CoopComponent,
    CoopListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

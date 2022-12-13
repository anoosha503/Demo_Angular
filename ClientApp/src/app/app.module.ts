import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CliComponent } from './cli/cli/cli.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AppPaginationComponent,
    ClientComponent,
    ClientListComponent,
    CliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'client-list', component: ClientListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

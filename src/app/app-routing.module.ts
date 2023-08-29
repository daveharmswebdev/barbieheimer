import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./Addresses/addresses.module').then(m => m.AddressesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

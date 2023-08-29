import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
  },
  {
    path: ':id',
    component: AddressDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressesRoutingModule {}

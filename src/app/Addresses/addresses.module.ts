import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import {AddressesRoutingModule} from "./addresses-routing.module";



@NgModule({
  declarations: [
    AddressesComponent,
    AddressDetailComponent
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule
  ]
})
export class AddressesModule { }

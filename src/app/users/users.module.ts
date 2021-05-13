import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserslistComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserslistComponent
  ]
})
export class UsersModule { }

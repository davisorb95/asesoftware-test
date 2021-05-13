import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'users', component: UserslistComponent },
      { path: 'user/:id', component: UserdetailComponent },
      { path: '**', component: UserslistComponent },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }

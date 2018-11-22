import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ComentsComponent } from './coments/coments.component';
import { PostComponent } from './post/post.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = 
[
  {
    path:'users',
    component : UsersComponent
  },
  {
    path:'coments',
    component : ComentsComponent
  },
  {
    path:'post',
    component : PostComponent
  },
  {
    path:'detalles/:id',
    component : DetallesComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

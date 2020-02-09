import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

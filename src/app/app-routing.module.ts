import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component:CarouselComponent},
  {path: '', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

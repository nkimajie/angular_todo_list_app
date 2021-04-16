import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { 
    path: '',      
    component: HomeComponent 
  },
  { 
    path: 'about',      
    component: AboutComponent 
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "contact-us",
    component: ContactComponent
  },
  {
    path: "forms",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

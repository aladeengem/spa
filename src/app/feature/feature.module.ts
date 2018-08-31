import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeatureRouter } from './feature.routes';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRouter
  ],
  declarations: [HomeComponent, ServicesComponent, AboutusComponent, ContactComponent]
})
export class FeatureModule { }

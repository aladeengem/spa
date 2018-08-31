import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { FeatureModule } from '../feature/feature.module';
import { HomeComponent } from '../feature/home/home.component';

const featureEntryPoint = () => {
    return FeatureModule;
}

const router: Routes = [
    { path: '', loadChildren: featureEntryPoint }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }

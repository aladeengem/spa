import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureModule } from './feature/feature.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './router/routes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    RoutesModule
  ],
  exports: [
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

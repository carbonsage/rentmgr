import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { AppRoutingModule, ROUTED_COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { SERVICES } from './services';
import { GUARDS } from './guards';

@NgModule({
  declarations: [
    AppComponent,
    ...ROUTED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NbThemeModule.forRoot({ name: 'corporate' }),
    // NbLayoutModule,
    // NbCardModule,
    // NbInputModule
  ],
  providers: [
    ...SERVICES,
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

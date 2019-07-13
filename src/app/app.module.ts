import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { AppRoutingModule, ROUTED_COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB37xZpka0rtSxD-kx6f6IZXLdxt-Ic8CU",
      authDomain: "rentapp-2ba48.firebaseapp.com",
      databaseURL: "https://rentapp-2ba48.firebaseio.com",
      projectId: "rentapp-2ba48",
      storageBucket: "rentapp-2ba48.appspot.com",
      messagingSenderId: "211599543677",
      appId: "1:211599543677:web:74adb5399dcba269"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ...SERVICES,
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

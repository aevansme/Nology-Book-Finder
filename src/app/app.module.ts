import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule } from '@angular/router';
import { CollectionModule } from './collection/collection.module';

var firebaseConfig = {
  apiKey: "AIzaSyBdp7skjEfoMsODvPmxgwQyWs730Td_-is",
  authDomain: "nologybookfinder.firebaseapp.com",
  databaseURL: "https://nologybookfinder.firebaseio.com",
  projectId: "nologybookfinder",
  storageBucket: "nologybookfinder.appspot.com",
  messagingSenderId: "426709603675",
  appId: "1:426709603675:web:d28ae2a29a159d75a1367e"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    // Core/Imported Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,    
    AngularFireAuthModule,

    // Application Modules
    AppRoutingModule,
    CollectionModule,
    SearchModule,
    SharedModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

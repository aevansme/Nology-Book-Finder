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
  apiKey: "<API Key goes here>",
  authDomain: "nologybookfinder.firebaseapp.com",
  databaseURL: "https://nologybookfinder.firebaseio.com",
  projectId: "nologybookfinder",
  storageBucket: "nologybookfinder.appspot.com",
  messagingSenderId: "<sender Id goes here>",
  appId: "<appId goes here>"
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

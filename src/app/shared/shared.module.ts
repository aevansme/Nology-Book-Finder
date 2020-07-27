import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JoinArrayPipe } from './pipes/join-array.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    JoinArrayPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ NavbarComponent, JoinArrayPipe ]
})
export class SharedModule { }

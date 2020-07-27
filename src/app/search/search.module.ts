import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchResultsListComponent } from './search-results-list/search-results-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchComponent, SearchResultsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }

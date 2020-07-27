import { Component, OnInit, Input } from '@angular/core';
import { VolumeInfo } from '../search.models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CollectionService } from 'src/app/shared/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss']
})
export class SearchResultsListComponent implements OnInit {

  _results: VolumeInfo[];
  @Input('results')
  set results(value: VolumeInfo[]) {
      this._results = value;
      this.setUniqueGenres();
  }

  genres: any;

  constructor(public authSvc: AuthService, 
              private router: Router,
              private collectionSvc: CollectionService) { }

  ngOnInit(): void {
  }

  onAddToCollection(result) {
    this.collectionSvc.addOrUpdateCollection(result).then(() => {
      // TODO: Display toast message to show successfully added book to collection
      this.router.navigate(['/collections'])
    });
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

  onFilterByGenre($event) {
    const genre = $event.target.value;
    // Check if the user has set a value
    if (!genre) {
      this._results.map(r => r.isHidden = false);
      return;
    }
    // They have! filter to only show the genre selected
    this._results.forEach(r => {
      if (r.categories) {
        r.isHidden = r.categories.filter(category => category == genre).length > 0;
      } else {
        r.isHidden= true;
      }      
    })
  }

  private setUniqueGenres() {
    const genreSet = new Set<string>();
    this._results.forEach(r => {
      // Build up our categories list
      if (r.categories) {
        r.categories.forEach(item => genreSet.add(item));
      }     
    });
    this.genres = [...genreSet];
  }

}

import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  searchTerm: string;
  results: any[];

  hasError: boolean;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  async onSearch() {
    this.hasError = false;

    this.results = await this.bookService.getBooksByAuthor(this.searchTerm).then((response) => {
      // Success! display the results
      if (response.items && response.items.length > 0) {
        return response.items.map(i => {
          const book = i.volumeInfo;
          book.id = i.id;
          return book;
        });
      } else {
        return [];
      }      
    }, (err) => {
      // Something went wrong.. Display this to the user
      this.hasError = true;
      return [];
    });
  }

}

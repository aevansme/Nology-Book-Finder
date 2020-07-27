import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  getBooksByAuthor(authorName: string): Promise<any> {
    const query = `q=inauthor:${authorName}`;
    return this.http.get(`${this.apiUrl}?${query}`).toPromise();
  }
}

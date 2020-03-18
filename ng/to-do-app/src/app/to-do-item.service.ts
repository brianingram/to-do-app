import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ToDoItemService {

  constructor(private http: HttpClient) { }

  private toDoItemsUrl = 'http://localhost:8080/to-do-items';
  private toDoItemUrl = 'http://localhost:8080/to-do-item/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getToDoItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(this.toDoItemsUrl)
      .pipe(
        tap(_ => this.log('fetched to do items')),
        catchError(this.handleError<ToDoItem[]>('getToDoItems', []))
      );
  }

  getToDoItemNo404<Data>(id: number): Observable<ToDoItem> {
    const url = `${this.toDoItemUrl}/?id=${id}`;
    return this.http.get<ToDoItem[]>(url)
      .pipe(
        map(toDoItems => toDoItems[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} to do item id=${id}`);
        }),
        catchError(this.handleError<ToDoItem>(`getToDoItem id=${id}`))
      );
  }

  getToDoItem(id: number): Observable<ToDoItem> {
    const url = `${this.toDoItemUrl}/${id}`;
    return this.http.get<ToDoItem>(url).pipe(
      tap(_ => this.log(`fetched to do item id=${id}`)),
      catchError(this.handleError<ToDoItem>(`getToDoItem id=${id}`))
    );
  }
/* Not used
  searchToDoItems(term: string): Observable<ToDoItem[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<ToDoItem[]>(`${this.toDoItemUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found to do items matching "${term}"`) :
         this.log(`no to do items matching "${term}"`)),
      catchError(this.handleError<ToDoItem[]>('searchToDoItems', []))
    );
  }
*/
  addToDoItem (toDoItem: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(this.toDoItemsUrl, toDoItem, this.httpOptions).pipe(
      tap((newToDoItem: ToDoItem) => this.log(`added to do item w/ id=${newToDoItem.id}`)),
      catchError(this.handleError<ToDoItem>('addToDoItem'))
    );
  }

  deleteToDoItem (toDoItem: ToDoItem | number): Observable<ToDoItem> {
    const id = typeof toDoItem === 'number' ? toDoItem : toDoItem.id;
    const url = `${this.toDoItemUrl}/${id}`;

    return this.http.delete<ToDoItem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted to do item id=${id}`)),
      catchError(this.handleError<ToDoItem>('deleteToDoItem'))
    );
  }

  updateToDoItem (toDoItem: ToDoItem): Observable<any> {
    const id = typeof toDoItem === 'number' ? toDoItem : toDoItem.id;
    const url = `${this.toDoItemUrl}/${id}`;

    return this.http.put(url, toDoItem, this.httpOptions).pipe(
      tap(_ => this.log(`updated to do item id=${toDoItem.id}`)),
      catchError(this.handleError<any>('updateToDoItem'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}

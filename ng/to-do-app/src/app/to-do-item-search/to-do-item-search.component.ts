import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { ToDoItem } from '../to-do-item';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-to-do-item-search',
  templateUrl: './to-do-item-search.component.html',
  styleUrls: [ './to-do-item-search.component.css' ]
})
export class ToDoItemSearchComponent implements OnInit {
  toDoItems$: Observable<ToDoItem[]>;
  private searchTerms = new Subject<string>();

  constructor(private toDoItemService: ToDoItemService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.toDoItems$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.toDoItemService.searchToDoItems(term)),
    );
  }

}

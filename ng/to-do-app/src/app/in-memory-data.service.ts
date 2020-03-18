import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDoItem } from './to-do-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const toDoItems = [
      { id: 11, name: 'Clean the floors', complete: false },
      { id: 12, name: 'Pay bills', complete: false },
      { id: 13, name: 'Buy groceries', complete: false },
      { id: 14, name: 'Mow the yard', complete: false },
      { id: 15, name: 'Take out the trash', complete: true },
    ];
    return {toDoItems};
  }

  genId(toDoItems: ToDoItem[]): number {
    return toDoItems.length > 0 ? Math.max(...toDoItems.map(toDoItem => toDoItem.id)) + 1 : 11;
  }
}

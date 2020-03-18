import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  toDoItems: ToDoItem[];

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit() {
    this.getToDoItems();
  }

  getToDoItems(): void {
    this.toDoItemService.getToDoItems()
      .subscribe(toDoItems => this.toDoItems = toDoItems);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.toDoItemService.addToDoItem({ name, complete: false } as ToDoItem)
      .subscribe(toDoItem => {
        this.toDoItems.push(toDoItem);
      });
  }

  delete(toDoItem: ToDoItem): void {
    this.toDoItems = this.toDoItems.filter(t => t !== toDoItem);
    this.toDoItemService.deleteToDoItem(toDoItem).subscribe();
  }

}

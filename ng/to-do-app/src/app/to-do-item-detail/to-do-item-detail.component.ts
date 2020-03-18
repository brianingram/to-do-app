import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToDoItemService }  from '../to-do-item.service';

@Component({
  selector: 'app-to-do-item-detail',
  templateUrl: './to-do-item-detail.component.html',
  styleUrls: ['./to-do-item-detail.component.css']
})
export class ToDoItemDetailComponent implements OnInit {
  @Input() toDoItem: ToDoItem;

  constructor(
    private route: ActivatedRoute,
    private toDoItemService: ToDoItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getToDoItem();
  }

  getToDoItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.toDoItemService.getToDoItem(id)
      .subscribe(toDoItem => this.toDoItem = toDoItem);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.toDoItemService.updateToDoItem(this.toDoItem)
      .subscribe(() => this.goBack());
  }
}

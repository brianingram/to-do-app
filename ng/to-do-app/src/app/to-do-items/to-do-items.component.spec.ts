import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemsComponent } from './to-do-items.component';

describe('ToDoItemComponent', () => {
  let component: ToDoItemsComponent;
  let fixture: ComponentFixture<ToDoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

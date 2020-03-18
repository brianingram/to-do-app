import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemSearchComponent } from './to-do-item-search.component';

describe('ToDoItemSearchComponent', () => {
  let component: ToDoItemSearchComponent;
  let fixture: ComponentFixture<ToDoItemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

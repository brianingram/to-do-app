import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemDetailComponent } from './to-do-item-detail.component';

describe('ToDoItemDetailComponent', () => {
  let component: ToDoItemDetailComponent;
  let fixture: ComponentFixture<ToDoItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

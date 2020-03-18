import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { ToDoItemDetailComponent } from './to-do-item-detail/to-do-item-detail.component';

const routes: Routes = [
  { path: 'toDoItems', component: ToDoItemsComponent },
  { path: '', redirectTo: '/toDoItems', pathMatch: 'full' },
  { path: 'detail/:id', component: ToDoItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { ToDoItemDetailComponent } from './to-do-item-detail/to-do-item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ToDoItemSearchComponent } from './to-do-item-search/to-do-item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    ToDoItemDetailComponent,
    ToDoItemSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokeListComponent } from './joke/jokelist.component';

// Add routes to the app which map url 
// sections to a component.
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'jokes', component: JokeListComponent},
  {path: 'joke', component: JokeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    DashboardComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

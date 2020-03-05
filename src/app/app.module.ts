import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import {HttpClientModule} from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PlayersComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

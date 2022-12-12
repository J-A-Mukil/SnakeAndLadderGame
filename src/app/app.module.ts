import { NgModule, OnInit, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    Player2Component,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input, EventEmitter } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.scss']
})
export class Player1Component {
  @Input() toggle !: boolean;

  numberHere : number = 0;
  playerOneToggle :boolean = false;
  posA : number = 0;
  
  constructor(private ser : PlayerService){
  }
  ngOnInit(){
      this.ser.toggleVal.subscribe(d=>{
        this.playerOneToggle = !d;
      })
  }
  playerOne(){
     this.numberHere = Math.floor(Math.random() * 6) + 1;
     this.ser.setToggle(this.playerOneToggle);
     this.ser.setPosA(this.numberHere);
     console.log(this.numberHere)
     console.log(this.toggle);
  }
}

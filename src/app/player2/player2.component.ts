import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.scss']
})
export class Player2Component implements OnInit{
  numberHere : number = 0;
  
  playertwoToggle : boolean = false;

  constructor(private ser : PlayerService){
  }
  ngOnInit(){
      this.ser.toggleVal.subscribe(d =>this.playertwoToggle = d)  
  }
  
  playerTwo() {
    this.numberHere = Math.floor(Math.random() * 6) + 1;
    this.ser.setToggle(!this.playertwoToggle);
    this.ser.setPosB(this.numberHere);
    console.log(this.numberHere);  
  }
}

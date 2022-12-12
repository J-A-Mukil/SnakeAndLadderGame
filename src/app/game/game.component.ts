import { Component, OnInit } from '@angular/core';
import { PlayerData } from './player-data'; 
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  uiBoard : PlayerData[] = [];
  curPosA : number = 0;
  curPosB : number = 0;
  // boardNo : number;
  // postionA : boolean;
  // postionB : boolean;
  // snakeHead : boolean;
  // snakeTail : boolean;
  constructor(private ser : PlayerService){
    
  }

  ngOnInit(): void { 
    for(let i = 0; i < 100; i++){
      
      if(i === 21 || i === 33 || i === 47 || i === 96 || i === 98 || i === 73 || i === 55){
        this.uiBoard.push(new PlayerData( i + 1,false, false, true, false));
      } else if(i === 9 || i === 17 || i === 6 || i === 32 || i === 40 || i === 41 || i == 17) {
        this.uiBoard.push(new PlayerData( i + 1,false, false, false, true));
      } else {
        this.uiBoard.push(new PlayerData( i + 1,false, false, false, false));
      }    
    }
      this.uiBoard[this.curPosA].posA = true;
      this.uiBoard[this.curPosB].posB = true;

      this.ser.subA.subscribe(d=>{
        this.uiBoard[this.curPosA].posA = false;
        
        this.curPosA += d;
        if(this.uiBoard[this.curPosA].isSnakeHead === true){
          this.curPosA = Math.max(0, this.curPosA - 10);
        }
        this.uiBoard[this.curPosA].posA = true;
        console.log("currposA" + this.curPosA);
      })

      this.ser.subB.subscribe(d=>{
        this.uiBoard[this.curPosB].posB = false;
        this.curPosB += d;
        if(this.uiBoard[this.curPosB].isSnakeHead === true){
          this.curPosB = Math.max(0, this.curPosB - 10);
        }
        this.uiBoard[this.curPosB].posB = true;
        console.log("currPosB" + this.curPosB);
      })
  }

  fun():void{
    for(let i = 0; i < 100; i++){
      console.log(this.uiBoard[i]);
    }
  }
}


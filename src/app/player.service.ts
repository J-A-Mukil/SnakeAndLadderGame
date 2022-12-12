import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public subA = new BehaviorSubject<number>(0);
  public subB = new BehaviorSubject<number>(0);

  public toggleVal = new BehaviorSubject<boolean>(true);

  constructor() { }

  setPosA(pos : number) {
    this.subA.next(pos);
  }

  setPosB(pos : number) {
    this.subB.next(pos);
  }

  setToggle(val : boolean) {
    this.toggleVal.next(val);
  }
}

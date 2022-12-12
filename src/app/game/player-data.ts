export class PlayerData {
    posNum: number = 0;
    posA : boolean = true;
    posB : boolean = true;
    isSnakeHead : boolean = false;
    isSnakeTail : boolean = false;

    constructor(boardNum : number, positionA : boolean, positionB : boolean, snakeHead : boolean, snakeTail : boolean) {
        this.posNum = boardNum;
        this.posA = positionA;
        this.posB = positionB;
        this.isSnakeHead = snakeHead;
        this.isSnakeTail = snakeTail;
    }
}

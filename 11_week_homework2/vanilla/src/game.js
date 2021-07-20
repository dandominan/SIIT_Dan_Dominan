import Player from "./player";
import Monster from "./monster";

class Game {
    static getRandomTopAndLeft(){
        const mapPositions = Game.getMapPositions();
        const randomIndexTop = Math.floor(Math.random() * mapPositions.length)
        const randomIndexLeft = Math.floor(Math.random() * mapPositions.length)
        const top = mapPositions[randomIndexTop];
        const left = mapPositions[randomIndexLeft];

        return{
            top,
            left
        }
    }

    static getMapPositions(){
        let array = [];
        for (let i = 0; i <= 360; i = i + 40){
            array.push(i);
        }
        return array;
    }

    constructor(map){
        this.map = map;
        this.player = new Player();
        this.monsterList = [];
        const monsterTypes = [1,2,3,4,5,6,7,8,9,10,11]

        for(let index = 0; index < monsterTypes.length; index++){
            this.monsterList.push(new Monster(monsterTypes[index]))
        }
    }

    showAllMonsters(){
        this.monsterList.forEach(monster => {
            const {top, left} = Game.getRandomTopAndLeft();
            monster.show(this.map, top, left);
        })
    }

    registerMovementPlayer(){
        document.addEventListener("keydown", (event) => {
            switch(event.key){
                case "ArrowUp":
                    this.player.moveUp();
                    break;
                case "ArrowDown":
                    this.player.moveDown();
                    break;
                case "ArrowLeft":
                    this.player.moveLeft();
                    break;
                case "ArrowRight":
                    this.player.moveRight();
                    break;
                default:
            }
        });
    }

    monstersStart(){
        this.gameIntervalId = setInterval(() => {
            this.monsterList.forEach(monster => {
                monster.run();
            });
        
        if (this.isPlayerIntersectWithMonster()){
            console.log('GameOver');
            clearInterval(this.gameIntervalId);
            alert('Game Over')
        }
    }, 300)
}

    isPlayerIntersectWithMonster(){
        const playerCoordinates = this.player.getCoordinates();
        const monstersCoordinates = this.monsterList.map(monster => {
            return monster.getCoordinates();
        });
        const isIntersect = monstersCoordinates.some(monsterCoordinates => {
            if (
                monsterCoordinates.top === playerCoordinates.top &&
                monsterCoordinates.left === playerCoordinates.left
            ){
                return true;
            }
                return false;
        })

        return isIntersect;
    }

    start(){
        this.player.show(this.map);
        this.showAllMonsters();
        this.registerMovementPlayer();
        this.monstersStart();
    }
}

export default Game;
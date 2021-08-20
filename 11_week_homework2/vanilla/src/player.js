import MoveHtmlElement from "./moveHtmlElement";

class Player extends MoveHtmlElement {

    static create(){
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.style.top = "200px";
        playerDiv.style.left = "0px";
        return playerDiv;
    }
    
    constructor(){
        super(40, Player.create())
    }

    show(map){
        map.append(this.htmlElement)
    }
}

export default Player;


class Lives {
    constructor(playerLives) {
      this.playerLives = playerLives;
    }

    substractLife() {
        debugger
        this.playerLives = this.playerLives - 1;
        document.getElementById('player-lives').innerText = this.playerLives;
        console.log(this.playerLives)
    }

}




export default Lives;
import './style.css'
import Game from './src/game';





const map = document.querySelector('#app');

const game = new Game(map);
game.start();
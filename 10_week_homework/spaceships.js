class Spaceship {
    constructor(color) {
        this.active = false;
        this.color = color;
    }

    createSpaceshipEl() {
        const imgEl = document.createElement('img');
        imgEl.src = this.color + "-spaceship.png";
        imgEl.style.width = "100px";
        imgEl.style.display = "block";
        imgEl.style.marginTop = "10px"
        return imgEl;
    }
    display(parentEl) {
        this.spaceshipEl = this.createSpaceshipEl();
        this.spaceshipEl.style.position = "relative";
        this.spaceshipEl.style.left = "10px"
        this.spaceshipEl.style.top = "10px"
        parentEl.append(this.spaceshipEl);
        this.registerClickEvent();
    }

    registerClickEvent() {
        this.spaceshipEl.addEventListener("click", () => {
            this.active = !this.active;
            this.spaceshipEl.style.backgroundColor = this.active ? "black" : "white";
        });
    }
    moveRight() {
        if (this.active) {
            const left = parseInt(this.spaceshipEl.style.left, 10);
            this.spaceshipEl.style.left = left + 5 + "px";
        }
    }
    moveLeft() {
        if (this.active) {
            const left = parseInt(this.spaceshipEl.style.left, 10);
            this.spaceshipEl.style.left = left - 5 + "px";
        }
    }
    moveUp() {
        if (this.active) {
            const top = parseInt(this.spaceshipEl.style.top, 10);
            this.spaceshipEl.style.top = top - 5 + "px";
        }
    }
    moveDown() {
        if (this.active) {
            const top = parseInt(this.spaceshipEl.style.top, 10);
            this.spaceshipEl.style.top = top + 5 + "px";
        }
    }
}


const spaceList = [];
spaceList.forEach((spaceship) => spaceship.display(document.body));

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowRight") {
        spaceList.forEach((spaceship) => {
            spaceship.moveRight();
        })
    }
    if (event.code === "ArrowLeft") {
        spaceList.forEach((spaceship) => {
            spaceship.moveLeft();
        })
    }
    if (event.code === "ArrowUp") {
        spaceList.forEach((spaceship) => {
            spaceship.moveUp();
        })
    }
    if (event.code === "ArrowDown") {
        spaceList.forEach((spaceship) => {
            spaceship.moveDown();
        })
    }
})

const generateBtn = document.getElementById('generate');
let clicks = 0;

generateBtn.addEventListener("click", function () {

    clicks++;
    console.log(clicks);
//  debugger;
    if (clicks === 1) {
        const spaceshipNew = new Spaceship("green");
        spaceList.push(spaceshipNew);
        spaceshipNew.display(document.body);
    }
    if(clicks === 2){
        const spaceshipNew = new Spaceship("blue");
        spaceList.push(spaceshipNew);
        spaceshipNew.display(document.body);
    }
    if(clicks === 3){
        const spaceshipNew = new Spaceship("red");
        spaceList.push(spaceshipNew);
        spaceshipNew.display(document.body);
    }
    if (clicks === 4) {
        clicks = 1;
        const spaceshipNew = new Spaceship("green");
        spaceList.push(spaceshipNew);
        spaceshipNew.display(document.body);
    }
});


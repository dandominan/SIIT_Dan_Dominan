class Spaceship {
    constructor(){
        this.active = false;
    }
    createSpaceshipEl(){
        const imgEl = document.createElement('img');
        imgEl.src = "blue-spaceship.png";
        imgEl.style.width = "100px";
        imgEl.style.display = "block";
        imgEl.style.marginTop = "10px"
        return imgEl;
    }
    display(parentEl){
        this.spaceshipEl = this.createSpaceshipEl();
        this.spaceshipEl.style.position = "relative";
        this.spaceshipEl.style.left = "0px"
        parentEl.append(this.spaceshipEl);
        this.registerClickEvent();
    }

    registerClickEvent(){
        this.spaceshipEl.addEventListener("click", () =>{
            this.active = !this.active;
            this.spaceshipEl.style.backgroundColor = this.active ? "black" : "white";
        });
    }
    moveRight(){
        if (this.active){
            const left = parseInt(this.spaceshipEl.style.left, 10);
            this.spaceshipEl.style.left = left + 5 + "px";
        }}
    moveLeft(){
        if(this.active){
            const left = parseInt(this.spaceshipEl.style.left, 10);
            this.spaceshipEl.style.left = left - 5 + "px";
    }}
}

const spaceship1 = new Spaceship();
const spaceship2 = new Spaceship();

const spaceList = [spaceship1, spaceship2];
spaceList.forEach((spaceship) => spaceship.display(document.body));

document.addEventListener("keydown", function(event){
    if (event.code === "ArrowRight") {
        spaceList.forEach((spaceship)=>{
            spaceship.moveRight();
        })
    }
    if (event.code === "ArrowLeft") {
        spaceList.forEach((spaceship) => {
            spaceship.moveLeft();
        } )
    }
})

const generateBtn = document.getElementById('generate');
generateBtn.addEventListener("click", function(){
    const spaceship = new Spaceship();
    spaceList.push(spaceship);
    spaceship.display(document.body);
});
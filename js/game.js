class Game {
    constructor() {
        this.background = new Background
        this.player = new Player        
        this.backgroundImages
        this.playerImage
        // this.boxImage
        
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage("./assets/background/1.png"), x: 0, speed: 0},
            { src: loadImage("./assets/background/2.png"), x: 0, speed: 0},
            { src: loadImage("./assets/background/3.png"), x: 0, speed: 0},
            { src: loadImage("./assets/background/4.png"), x: 0, speed: 0},            
            { src: loadImage("./assets/background/5.png"), x: 0, speed: 0},
            { src: loadImage("./assets/background/6.png"), x: 0, speed: 0},
        

        ]  
        
        this.playerImage = loadImage("./assets/background/Browser Games - SpongeBob Saves The Day - Squidward (1).png");
        // this.boxImage = rect(100, 100, 50, 50);


    }

    draw() {
        clear()
		this.background.draw()
        this.player.draw()
        // this.box.draw()
    }


}


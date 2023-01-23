class Player {
    constructor() {
        this.width = 100
		this.height = 200
		this.x = 50
		this.y = 750 - this.height
        // this.velocity = 0
        // this.gravity = -2


    }

    draw() {
        
        image(game.playerImage, this.x, this.y, this.width, this.height);

        if (this.y < 0 ) {
            this.y = 0
        }

        if (this.x <= 0) {
            this.x = 0
        }
        
        
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 5;
        }
        
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
        }
        
        if (keyIsDown(UP_ARROW)) {
            this.y -= 10
        }
        
    }
    
    jump() {
        this.velocity = - 10
    }



}
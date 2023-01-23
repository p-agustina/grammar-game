class Box {
    constructor(image) {
        this.image = image

        this.x = width
		this.y = 300
		this.width = 50
		this.height = 50
    }

    draw() {
        this.image(this.image, this.x, this.y, this.width, this.height)
    }


}
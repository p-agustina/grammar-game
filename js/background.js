class Background {
       
    
    draw() {
     image(game.backgroundImages[0].src, 0, 0, this.width, height)
     image(game.backgroundImages[1].src, 0, 0, width, height)
    
   


    //  game.backgroundImages.forEach(function (img) {
    //     // img.x -= img.speed
    //     image(img.src, img.x, 0, width, height)
    //     // Here we add a second image
    //     image(img.src, img.x + width, 0, width, height)

    //     // When the image leaves the screen we set it to the starting position
    //     if (img.x <= - width) img.x = -100
    // })
     }

 }
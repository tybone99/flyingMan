
var
    fishSprite,
    backgroundSprite,
    foregroundSprite,
    topCoralSprite,
    bottomCoralSprite,
    textSprites,
    scoreSprite,
    splashScreenSprite,
    okButtonSprite,
    smallNumberSprite,
    largeNumberSprite;
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y *2;
    this.width = width * 2;
    this.height = height * 2;

}
    Sprite.prototype.draw = function (renderingContext, x, y) {
        renderingContext.drawImage(this.img, this.x, this.y , this.width, this.height,
        x,y, this.width, this.height);
    };

function initSprites(img){
    fishSprite = [
        new Sprite(img, 382, 218, 36, 36),
        new Sprite(img, 417.5, 217, 36, 36),
        new Sprite(img, 453 ,217, 36, 36)
    ];
    backgroundSprite = new Sprite(img, 0, 0, 138, 114);
    backgroundSprite.color = "blue" + ""; //save background color
    console.log("plz");
    foregroundSprite = new Sprite(img, 141.5, 127, 110.5, 22);

    topCoralSprite = new Sprite(img, 251, 0, 26, 200);
    bottomCoralSprite = new Sprite(img, 277, 0, 26, 200);

    textSprites = {
        floppyFish: new Sprite(img, 59, 114, 96, 22),
        gameOver: new Sprite(img, 77.5, 276, 91, 19.5),
        getReady: new Sprite(img, 59, 155, 87, 22)
    };

    topCoralSprite = new Sprite(img, 590, 1.5, 77.5, 195);
    bottomCoralSprite = new Sprite(img, 590, 1.5, 77.5, 195);


    okButtonSprite = new Sprite(img, 122, 314, 46, 18);

    scoreSprite = new Sprite(img, 138, 56, 113, 58);
    splashScreenSprite = new Sprite(img, 0, 114, 59, 49);

}console.log("plz");
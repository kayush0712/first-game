var car;
var background;
var cursors;

var carGroup;

var config = {
    type: Phaser.AUTO,
    width: 780,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('background-1','../images/background-1.png')
    this.load.image('car', '../images/car.png')

}

function create () {
    background =  this.physics.add.staticGroup();

    this.add.image(380, 285, 'background-1');
    car = this.physics.add.sprite(380, 560, 'car');
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(car, background);
}

function update () {
    
    if(cursors.up.isDown){
        car.setVelocityY(-100);
    }else if(cursors.down.isDown){
        car.setVelocityY(100);

    }else if(cursors.left.isDown){
        car.setVelocityX(-100);

    }else if(cursors.right.isDown){
        car.setVelocityX(100);
    }
}


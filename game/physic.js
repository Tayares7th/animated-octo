function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var moveDistance2 = -50 * delta;
    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);
    
    for (var i = 0; i < 100; i++) {
        ennemy1.turnLeft(rotateAngle);
        ennemy1.accelerate(moveDistance);
    }
    for (var j = 0; j < 100; j++) {
        ennemy1.turnRight(moveDistance);
        ennemy1.accelerate(moveDistance2);
    }
    ennemy1.move();
    player1.move();

    controls.update();
}
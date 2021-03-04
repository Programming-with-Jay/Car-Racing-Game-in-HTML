
var score=0
function preload()
{
    carImg=loadImage("mycar.png")
    enemyImg=loadImage("enemy_car_1.png")
    bgImg=loadImage("back_ground.jpg")
    coinImg=loadImage("diamond.png")
}
function setup()
{
    createCanvas(500,500);
    bg = createSprite(250,250);
    bg.scale=2
    bg.addImage(bgImg)
    bg.velocityY=-5

    edges=createEdgeSprites();

    car=createSprite(250,400)
    car.scale=1
    car.addImage(carImg)
    
    coinGroup=new Group;
    enemyGroup=new Group;
}
function draw()
{
    stroke("white")
    car.bounceOff(edges[0]);
    car.bounceOff(edges[1]);
    car.bounceOff(edges[2]);
    car.bounceOff(edges[3]);
    if(bg.y<100)
    {
      bg.y=bg.height/4
    }
    if(keyDown("right"))
    {
        car.velocityX=+5
    }
    if(keyDown("left"))
    {
        car.velocityX=-5
    }
    generateEnemy()
    generateCoin()
    for(var i=0;i<(enemyGroup).length;i++)
    {
        temp=(enemyGroup).get(i)
        if(temp.isTouching(car))
        {
           car.collide(temp)
        }
    }
    for(var i=0;i<(coinGroup).length;i++)
    {
        temp=(coinGroup).get(i)
        if(temp.isTouching(car))
        {
            score++
           temp.destroy()
        }
    }
    drawSprites()
    textSize(20)

    text("Score: "+score,250,80)
}
function generateEnemy()
{
  if(frameCount%60==0)
  {
    enemy=createSprite(1200,0,40,10);
    enemy.x=random(40,400)
    enemy.scale=1
    enemy.addImage(enemyImg)
    enemy.velocityY=5
    enemyGroup.add(enemy)

  }
}
function generateCoin()
{
  if(frameCount%60==0)
  {
    coin=createSprite(1200,0,40,10);
    coin.x=random(40,400)
    coin.scale=0.3
    coin.addImage(coinImg)
    coin.velocityY=5
    coinGroup.add(coin)

  }
}
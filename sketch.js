var bg,bg2,form,d,d1,d2,d3,d4,d5,d6;
var score=0;
var a1 = "VARIABLE";
var a2 = "FUNCTION";
var a3 = "DATABASE"
var n=0
function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")

  bg2=loadImage("aladdin_cave2.jpg")
  //load image 
}
function setup() {
  
  createCanvas(1000,500);
  d1=createButton("check")
  d1.position(100,110)
  d2=createInput("enter anzer")
  d2.position(100,80)  
  d3=createButton("check")
  d3.position(400,110)
  d4=createInput("enter anzer")
  d4.position(400,80) 
  d5=createButton("check")
  d5.position(300,360)
  d6=createInput("enter anzer")
  d6.position(300,330) 
}

function draw() {
if(score!=3){
  background(bg)

  fill("white")
  textSize(15)
  text("R E V B A I L A", 100,50)
  fill("lightblue")
  text("Hint: Always changing, not constant !!", 100,70)
  fill("white")
  textSize(15)
  text("CUTNIFON.", 400,50)
  fill("lightblue")
  text("create with name entter code inside call any time", 400,70)
  fill("white")
  textSize(15)
  text("ATADASBA", 300,300)
  fill("lightblue")
  text("CREATE on web use in code store data in cloud", 300,320)
  
}
text("score:"+score,200,200)
d1.mousePressed(()=>{
var ll=d2.value()
if(ll==a1){
score=score+1
d1.hide()  
  d2.hide()  
}
})
d3.mousePressed(()=>{
  var ll=d4.value()
  if(ll==a2){
  score=score+1
  d3.hide()  
    d4.hide()  
  }
  })
  d5.mousePressed(()=>{
    var ll=d6.value()
    if(ll==a3){
    score=score+1
    d5.hide()  
      d6.hide()  
    }
    })










if (score==3) {
  background(bg2)
n=n+1
  
if(n==1){
  clear()
}
textSize(40)
fill("#00FFFF")
text("you unlocked it",500,250)


  d1.hide()  
  d2.hide()  
  d3.hide()  
  d4.hide()  
  d5.hide()  
  d6.hide()

}

  drawSprites()
}
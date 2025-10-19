const c=document.getElementById('c'),ctx=c.getContext('2d');
let score=0,sq={x:150,y:150,size:100};
function draw(){
  ctx.clearRect(0,0,400,400);
  ctx.fillRect(sq.x,sq.y,sq.size,sq.size);
  ctx.fillText("Score:"+score,10,20);
}
c.onclick=e=>{
  let r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
  if(x>sq.x&&x<sq.x+sq.size&&y>sq.y&&y<sq.y+sq.size){
    score++;sq.x=Math.random()*(300);sq.y=Math.random()*(300);draw();
  }
}
draw();

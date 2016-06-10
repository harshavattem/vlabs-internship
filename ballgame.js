var na,nb,nc,nd,prev = { num:1, x:100, y:100}, b1 = { num:1, x:100, y:100},  next = { num:1, x:0, y:0},  i=0, a = { num : 1, x : 100, y : 100}, b = { num:2, x : 300, y : 100}, c = { num:3, x : 100, y : 300}, d = { num:4, x : 300, y : 300}, button_start, bx = 100, by = 100;

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);

 
  fill(0,0,200);
  
  ellipse(100,100,20,20);
  ellipse(300,100,20,20);
  ellipse(100,300,20,20);
  ellipse(300,300,20,20);

  na = createElement('h6','A');
  na.position(70,70);
  nb = createElement('h6','B');
  nb.position(320,70);
  nc = createElement('h6','C');
  nc.position(70,320);
  nd = createElement('h6','D');
  nd.position(320,320); 


  button_start = createButton('Throw');
  button_start.position(500, 200);
 


  button_start.mouseClicked(pass);


}


function pass(){

  do
  {
  next.num = Math.floor(Math.random()*4)+1;
  } 
  while(next.num === b1.num);

  switch(next.num)
    {
    case 1:
{ 
    next = a;
    break;
}
    case 2:
{
    next = b;
    break;
}
    case 3:
{
    next = c;
    break;
} 
    case 4:
{
    next = d;
    break;
}
    }

    prev.num = b1.num;
    prev.x = b1.x;
    prev.y = b1.y;
    b1.num = next.num;
    b1.x = next.x;
    b1.y = next.y;
    fill(0,0,200);
    ellipse(prev.x,prev.y,15,15);
    fill(200,0,0);
    ellipse(b1.x,b1.y,15,15);
}  


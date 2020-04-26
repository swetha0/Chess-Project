let queen = {
  direction: "south",
  whereabouts:[],
  x: 0,
  y: 4
}


console.log("Queen's current Position ->"  + board[queen.x][queen.y]);
document.getElementById("output").innerHTML= board[queen.x][queen.y];

queen.changedirection = function() {
  var direct = prompt("DIRECTION");
  switch (direct) {
    case "N":
      queen.direction = "north";
      break;
    case "S" :
      queen.direction = "south";
      break;
    case "SW" :
      queen.direction = "south west";
      break;
    case "SE":
      queen.direction = "south east";
      break;
    case "NE":
      queen.direction = "north east";
      break;
    case "NW":
      queen.direction = "north west";
      break;
    case "W" :
      queen.direction = "west";
      break;
    case "E" :
      queen.direction = "east";
      break;
  }
};
queen.changedirection();


queen.moveforward = function() {
    var n = prompt("steps");
    tempx= queen.x;
    tempy= queen.y;
    if (queen.direction == "north") 
  {
      tempx+=n;
    
     if(boundarycheck(tempx))
      queen.x=tempx;
  }
   if (queen.direction == "west")
  { tempy-=n;
    if(boundarycheck(tempy))
      queen.y=tempy;
  
  }
   if (queen.direction == "east")
  { tempy+=n;
    if(tempy>=7)
      queen.y =tempy;
  }
   if(queen.direction=="south")
    {
      tempx-=n;
      if(boundarycheck(tempx))
        queen.x=tempx;
    }
   if (queen.direction == "north east") 
  {
    tempx += n;
    if(boundarycheck(tempx))
    queen.x=tempx;
if(boundarycheck(tempy))
tempy+=n;
queen.y=tempy;

  }
   if (queen.direction == "north west") 
  {
  tempx += n;
  if(boundarycheck(tempx))
  queen.x=tempx;
if(boundarycheck(tempy))
tempy-=n;
queen.y=tempy;
  }
   if (queen.direction == "south west") {
    tempx -= n;
    tempy -= n;
    if(boundarycheck(tempx))
    queen.x=tempx;
    if(boundarycheck(tempy))
    queen.y=tempy;
  }
  if (queen.direction == "south east") {
    tempx -= n;
    tempy += n;
    if(boundarycheck(tempx))
    queen.x=tempx;
    if(boundarycheck(tempy))
    queen.y=tempy;
  }
};
queen.moveforward();


function boundarycheck(z)
{
  if(z<0 || z>7)
    {
      console.log("out of chessboard");
      return false;
    }
  else
    return true;
}
console.log(queen.x);
console.log(queen.y);


var board = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
console.log("Queen's current Position ->"  + board[0][4]);


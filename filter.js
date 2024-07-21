var canvas = null;
var img = null;
var img2 = null;
var img3 = null;
var img4 = null;
var img5 = null;
var img6 = null;

function upload() {
  var g = document.getElementById("input-file");
img = new SimpleImage(g);
img2 = new SimpleImage(g);           img3 = new SimpleImage(g);
img4 = new SimpleImage(g);           img5 = new SimpleImage(g);
img6 =  new SimpleImage(g);  
  canvas = document.getElementById("preview");
  img.drawTo(canvas);
}
function clearCanvas(canvass) {
  var ctx = canvass.getContext("2d");
  ctx.clearRect(0, 0, canvass.width, canvass.height)
 }
function wipeClean() {
  clearCanvas(canvas);
}
/*with image2*/function makeGrey() {
    for (var pixelG of img2.values()){
    var avg = (pixelG.getRed()+pixelG.getGreen()+pixelG.getBlue())/3;  
    pixelG.setRed(avg);
    pixelG.setGreen(avg);
    pixelG.setBlue(avg);  
    }
wipeClean()
  img2.drawTo(canvas);
}


/*with image3*/function yellowImage() {
for(var pixe of img3.values()){
  var green = 250;
  var red = 250;
  pixe.setRed(red);
  pixe.setGreen(green);

}  
wipeclean() 
  img3.drawTo(canvas);

}



function doEclipse() {
for (var pixel of img4.values())  {
  var B = pixel.getRed();
  var R = pixel.getBlue();
pixel.setRed(R);
  pixel.setBlue(B);
}
wipeClean()
  img4.drawTo(canvas);
}

function doPurple(){
  for (var pixx of img5.values()){
   pixx.setRed(255);
    pixx.setBlue(255);
  }
wipeClean()
  img5.drawTo(canvas);
}

function resetImage() {
  wipeClean()
  img.drawTo(canvas);

}
function doRed() {
for (var pixel of img6.values()){
  var avge = (pixel.getRed()+pixel.getGreen()+pixel.getBlue()/2);
  if(avge < 128){
    pixel.setRed(avge*2);
    pixel.setGreen(0)
    pixel.setBlue(0);
  }
  if(avge => 128){
   pixel.setRed(255);
   pixel.setGreen(avge*2-255);
   pixel.setBlue(avge*2-255) 
  }
}
  wipeClean()
  img6.drawTo(canvas);
}

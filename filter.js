var originalImage = null;
var grayImage = null;
var redImage = null;
var redFilterImage = null;
var blurImage = null;
var blurred = null;
var rainbowImage = null;
var canvas = document.querySelector(".cvs");
function loadImage() {
   var fileInput = document.querySelector(".finput");
  originalImage = new SimpleImage(fileInput);
  grayImage = new SimpleImage(fileInput);
  redImage = new SimpleImage(fileInput);
  redFilterImage = new SimpleImage(fileInput);
  blurImage = new SimpleImage(fileInput);
  rainbowImage = new SimpleImage(fileInput);
  originalImage.drawTo(canvas);
}

function doGrayscale() {
  if ( imageIsLoaded(grayImage) ) {     
    filterGray();	                      
    grayImage.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}

function doRed() {
  if ( imageIsLoaded(redImage) ) {     
    filterRed();	                      
    redImage.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}

function doRedFilter() {
  if ( imageIsLoaded(redFilterImage) ) {     
    filterRedFilter();	                      
    redFilterImage.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}

function doBlur() {
  if ( imageIsLoaded(blurImage) ) {     
    filterBlur();	                      
    blurred.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}

function doRainbow() {
  if ( imageIsLoaded(rainbowImage) ) {     
    filterRainbow();	                      
    rainbowImage.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}

function imageIsLoaded(image) {
  var result;
  if(image == null || (!image.complete()))
    result = false;
  else
    result = true;
  return result;
}
function filterGray() {
  for(var pixel of grayImage.values()) {
    var avg = (pixel.getRed() +             pixel.getGreen() + pixel.getBlue())/3;
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
  }
}

function filterRed() {
  for(var pixel of redImage.values()) {
    pixel.setRed(255);
  }
}

function filterRedFilter() {
  for(var pixel of redFilterImage.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3
    if (avg < 128){
      pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    else {
        pixel.setRed(255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue((2*avg)-255);
    } 
  }
}

  function filterBlur(){
      var w=blurImage.getWidth();
      var h=blurImage.getHeight();
      blurred = new SimpleImage(w,h);
    for (var pixel of blurImage.values()){
      var x=pixel.getX();
      var y=pixel.getY();
      
    if (Math.random()>=0.5){
          blurred.setPixel(x, y, pixel);
    }
      else{
        var xdelta=(Math.random()*20)-10;
        var ydelta=(Math.random()*20)-10;
        var roundxdelta=Math.round(xdelta);
        var roundydelta=Math.round(ydelta);
        var newx=x+roundxdelta;
        var newy=y+roundydelta;
        if(newx>(w-1)||newx<0){
          newx=x};
        if (newy>(h-1)||newy<0)
        {newy=y};
        var newpixel = originalImage.getPixel(newx,newy);
        blurred.setPixel(x,y,newpixel);
    }
    }    
  }

function filterRainbow() {
  for (var pixel of rainbowImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var height = rainbowImage.getHeight();
    var avg3=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3; 
    if (y>=0 && y<=height/5){
      if(avg3<128){
    pixel.setRed(0);
    pixel.setGreen(0);    
    pixel.setBlue(2*avg3);
  }
    else {
      pixel.setRed(2*avg3-2550);
      pixel.setGreen(2*avg3-255);
      pixel.setBlue(255);
    }
}
    if(y>height/6 && y<=2*height/6){
      if(avg3<128){
        pixel.setRed(0);
        pixel.setGreen(1.6*avg3);
        pixel.setBlue(1.6*avg3);
      }
      else {pixel.setRed(0);
           pixel.setGreen(0.4*avg3+153);
           pixel.setBlue(0.4*avg3+153);
           }
    }
    if(y>2*height/6 && y<=3*height/6){
      if(avg3<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg3);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(2*avg3-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg3-255);
      }
    }
    if(y>3*height/6 && y<=4*height/6){
      if(avg3<128){
        pixel.setRed(2*avg3);
        pixel.setGreen(2*avg3);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg3-255);
      }
    }
    if(y>4*height/6 && y<=5*height/6){
      if(avg3<128){
        pixel.setRed(2*avg3);
        pixel.setGreen(0);
        pixel.setBlue(0);      
     }
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avg3-255);
        pixel.setBlue(2*avg3-255);
      }
    }
    if(y>5*height/6 && y<=6*height/6){
      if(avg3<128){
        pixel.setRed(1.6*avg3);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg3);
      }
      else{
        pixel.setRed(0.4*avg3+153);
        pixel.setGreen(2*avg3-255);
        pixel.setBlue(0.4*avg3+153);
      }
    }
  }
}
    
function doReset() {
  if(imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
  }
  else
    alert("Image is not loaded");
}


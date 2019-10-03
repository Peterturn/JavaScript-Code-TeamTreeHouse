var html = '';
var red;
var green;
var blue;
var rgbColor;
var count = 0;





while(count<10){
red = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
html += '<div style="background-color:' + rgbColor + '"></div>'; count+=1;}

document.write(html);

//random code practice //
var i=2
do{console.log(i);i+=2;}
while(i<=24
);

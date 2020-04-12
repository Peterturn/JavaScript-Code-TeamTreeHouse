
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<h2>' + message + '</h2>');
}

while(true){
  search=prompt('search our a products. type "list" to see all or type "quit to exit." ');
  search=search.toLowerCase();
if (search==='quit'){
  break;
}
else if (search==='list'){
  print(inStock.join(', '));
}
else {
  //if statement 'if(inStock.indexOf( search ) > -0 )didn't work. Changed it to ">=0" and works great.
  if(inStock.indexOf( search ) >=0 ){
    print('yes we have '+ search+ ' in our stock.</p>');
  } else{
    print(search + ' is not in stock.');
  }
}

//end of 'while(true)' code block
}

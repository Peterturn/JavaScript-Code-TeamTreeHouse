var playList = [
    ['I Did It My Way', 'Franck Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce'],
    ['Louie Louie', 'The Kingsmen'],

];

/*basic print function "the words inside of 'function print( )' make the document.write
look for something before it prints"  */

function print(message) {
  document.write(message);
}
/* uses print function to create html but is waiting for array var to be placed
inside of "function printList(list)"*/

function printSongs(songs){
var listHTML="<ol>";

for (i=0; i<songs.length; i+=1){
listHTML+= '<li>'+' '+ songs[i][0] + ' by ' + songs[i][1] + '</li>';}

listHTML +=  "</ol>";


print(listHTML);
}

printSongs(playList);

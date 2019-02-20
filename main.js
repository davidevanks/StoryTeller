//Declaración de variables
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//Textos  a usar
let storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. name saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX=["Willy the Goblin","Big Daddy","Father Christmas"];

var insertY=["the soup kitchen","Disneyland","the White House"];

var insertZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


//Funciones

randomize.addEventListener('click', result);

function result() {
    let newStory=storyText;
    let xItem=randomValueFromArray(insertX);
    let yItem=randomValueFromArray(insertY);
    let zItem=randomValueFromArray(insertZ);
  
//en el caso del insertx se realiza dos veces la llamada del replace, ya que el replace  funciona con la primer instancia encontrada
    newStory=newStory.replace(":insertx:",xItem).replace(":inserty:",yItem).replace(":insertz:",zItem).replace(":insertx:",xItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory=newStory.replace('name',name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300) + ' stone';
    var temperature =  Math.round(94) + ' centigrade';
    newStory=newStory.replace('94 fahrenheit',temperature).replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
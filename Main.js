
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}
const storyText="Afuera hacía 94 grados Fahrenheit, así que :insertx: salí a caminar. Cuando llegaron a :inserty:, se quedaron mirando horrorizados por unos momentos, luego :insertz:. Bob vio todo, pero no se sorprendió: :insertx: pesa 300 libras y era un día caluroso.";
const insertx=["Willy the Goblin","Big Daddy","Father Christmas"];
const inserty=["el comedor social","Disneyland","la casa Blanca"];
const insertz=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

const xItem = randomValueFromArray(insertx);
const yItem = randomValueFromArray(inserty);
const zItem = randomValueFromArray(insertz);

newStory = newStory.replaceAll(':insertx',xItem);
newStory = newStory.replaceAll(':inserty',yItem);
newStory = newStory.replaceAll(':insertz',zItem);

if(customName.value !== '') {
const name = customName.value;
newStory=newStory.replaceAll("Bob",name);

}

if(document.getElementById("uk").checked) {

    const weight = `${Math.round(300*0.071428)} stone`;
    const temperature =  `${Math.round(94-32)*5/9} centigrade`;
    newStory = newStory.replaceAll('94 farenheit', temperature);
    newStory = newStory.replaceAll('300 pounds',weight);

}

story.textContent =newStory;
story.style.visibility = 'visible';
}

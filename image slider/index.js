const images=document.querySelectorAll('img');
const previous=document.getElementById('prev');
const next=document.getElementById('next');

let slideCount=0;
console.log(images)
images[slideCount].style.display='block'

console.log(slideCount)
function previousItem(){
    slideCount-=1;
    console.log(slideCount)
    images[slideCount].style.display='block'
}
function nextItem(){
    slideCount++;
    images[slideCount].style.display='block';
    console.log(slideCount)
}
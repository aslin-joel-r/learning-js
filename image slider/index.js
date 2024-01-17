const images=document.querySelectorAll('.slide');
const previous=document.getElementById('prev');
const next=document.getElementById('next');

let slideIndex=0;
console.log(images)
images[slideIndex].style.display='block'

setInterval(nextItem,3000)

function previousItem(){
    
    images[slideIndex].style.display='none'
    console.log('Before process:',slideIndex)
    slideIndex--;
    if(slideIndex<0){
        slideIndex=images.length-1
    }
   
    console.log('slide Index :',slideIndex)
    //console.log('mod is :',slideIndex%=images.length)
    images[slideIndex].style.display='block'
}
function nextItem(){
    console.log('slide Index :',slideIndex)
    console.log('mod is :',slideIndex%=images.length)
   
    images[slideIndex].style.display='none';
    slideIndex++;
    if(slideIndex>=images.length){
        slideIndex%=images.length
    }
    images[slideIndex].style.display='block'
}
   

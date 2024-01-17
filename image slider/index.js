const images=document.querySelectorAll('.slide');

let slideIndex=0;
const len=images.length;

images[slideIndex].style.display='block'
setInterval(nextItem,5000)

function previousItem(){
    images[slideIndex].style.display='none';
    slideIndex--;

    if(slideIndex<0){
        slideIndex=len-1
    }
    images[slideIndex].style.display='block'
}
function nextItem(){
    images[slideIndex].style.display='none';
    slideIndex++;
    if(slideIndex>=len){
        slideIndex%=len
    }
    images[slideIndex].style.display='block'
}
   

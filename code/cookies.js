function setCookie(name, value, days) {
    let date = new Date();
date.setTime(date.getTime() + days * 24 * 3600 );
    let expires = date.toUTCString();
    document.cookie = `${name}=${value};expires=${expires}`;
}

function deleteCookie(name) {
    setCookie(name, null, -1);
}

console.log(document.cookie);

getCookie('Hersho')

function getCookie(name){
    let cokie=document.cookie
    let  data=cokie.split('; ')
    data.forEach((elements)=>{
        if(elements.startsWith(name)){
            let element=elements.split('=')
            console.log("Cookie value is : ",element[1])
    }
    
   });
}

async function getPoke(){

    let pokemon=document.getElementById('pokemon').value;
    pokemon=pokemon.toLowerCase();
    const img=document.getElementById('image');
    let err=document.getElementById('error');

    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response)

        if(!response.ok){
            img.style.display='none';
            err.textContent=`No pokemon named ${pokemon}`;
            err.style.color='red';
            throw new Error("Enter the valid Pokemon");
        }

        err.style.display='none'
        const data=await response.json();
        console.log(data)
        img.style.display='block';
        let front_img =data.sprites.front_default;
        img.src=front_img;
    }
    catch(error){
        console.log(error);
    }
}

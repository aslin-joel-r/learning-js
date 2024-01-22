async function getPoke(){
    const pokemon=document.getElementById('pokemon').value;
    const img=document.getElementById('image');
    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response)

        if(!response.ok){
            throw new Error("Enter the valid Pokemon");
        }
        const data=await response.json();
        console.log(data)
        img.style.display='block';
        let a =data.sprites.front_default;
        img.src=a;
    }
    catch(error){
        console.log(error);
    }
}

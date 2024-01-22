async function getPoke(name){
    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(response)

        if(!response.ok){
            throw new Error("Enter the valid Pokemon");
        }
        const data=await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

getPoke('pikachu');
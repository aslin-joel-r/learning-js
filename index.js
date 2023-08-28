var word='helloeveryonehowareyou'

function letterFinder(match,word){
    for(let i=0;i<word.length;i++){

        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            //console.log("Match not found");
        }
    }
}

letterFinder('l',word);


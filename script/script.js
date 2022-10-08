function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function textWrite(element, words, it1, it2){
    document.querySelector(element).innerHTML += words[it1][it2];
}

function textDelete(element, words, time, it1, itDel){
    document.querySelector(element).innerHTML = words[it1].slice(0, itDel);
}

async function textChangeAnimation(element, time1, time2, words){
    while(true){
        for(let a = 0; a < words.length; a++){
            document.querySelector(element).innerHTML = " ";
            
            for(let b = 0; b < words[a].length; b++){
                await delay(time1);
                await textWrite(element, words, a, b);
            }
            
            await delay(time2);
            
            for(let c = words[a].length; c > 0; c--){
                let tempC = c - 1;
                await delay(time1);
                await textDelete(element, words, time1, a, tempC);
            }
            await delay(150);
        }
    }
}

textChangeAnimation(".text", 120, 1800, ["Student", "Developer", "Designer"]);

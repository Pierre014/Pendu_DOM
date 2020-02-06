(()=>{
    //tableau pour le mot a trouver
    //placement des éléments de base.
    const putWord= prompt("entrez le mot à deviner: "); 
    const WORD = putWord.toUpperCase().split('')
    const WORDFIND=[];
    let stringGuess = ""; //permettra de comparer les deux tableaux
    let countTrial = 0;
    let countWrong = 10;
    let stringWrongLetter = "";
    let victory = document.createElement('p');
    victory.style.fontSize = "x-large";
    victory.style.textAlign = "center"
    
    document.getElementById('tentative').innerHTML=countWrong+" life(s)";
    stringGuess = WORD.join("")
    let wrong = document.createElement('p'); //recotera les mauvaises lettres
    wrong.style.textAlign = "center";
    wrong.style.fontSize = "20px"
    document.body.appendChild(wrong);


    //affichage du nombre de lettre à trouver sur la page html
        for(let i = 0; i<WORD.length;i++){
        document.getElementById('lettre').innerHTML+="_ ";
        WORDFIND[i]  ="_";
    }
    //event pour l'entrée d'une lettre
    document.getElementById('run').addEventListener('click',()=>{
        countTrial++
        let stringFind = ""; 
        document.getElementById("lettre").innerHTML=""; //clear tag lettre
        let chooseLetter = document.getElementById('letters').value;
        document.getElementById('letters').value = ""; //clear  input
    
    for(let i=0;i<WORD.length;i++){
        if(chooseLetter.toUpperCase()===WORD[i]){
            WORDFIND[i]=chooseLetter.toUpperCase();
        }
    }
    WORDFIND.forEach(letter =>{
        document.getElementById('lettre').innerHTML+=letter +" ";
        stringFind+=letter;
    })

    //condition of victory
    if(stringGuess == stringFind){
        victory.textContent = "VICTORY, you're found the word in "+countTrial+" trials";
        document.getElementById('hanged').appendChild(victory);
    }
    //if wrong letter choose
        if(!stringGuess.includes(chooseLetter.toUpperCase())&&!stringWrongLetter.includes(chooseLetter.toUpperCase())){
            let span = document.createElement('span');
            span.textContent = chooseLetter+", ";
            span.style.textDecoration = "line-through";
            wrong.appendChild(span);
            countWrong--;
            document.getElementById('tentative').innerHTML=countWrong+" life(s)";
            stringWrongLetter+=chooseLetter.toUpperCase();
        }
        if(countWrong ==0){
            victory.textContent = "YOU LOOSE";
            document.getElementById('letters').setAttribute('disabled','');
            document.getElementById('hanged').appendChild(victory);
        }
    })




})()
//792-Number-of-Matching-Subsequences 
//https://leetcode.com/problems/number-of-matching-subsequences/description/

//FIRST TRY - WRONG (has to do with indexOf choosing first index)

var numMatchingSubseq = function(S, words) {
    let count = 0;
    
    const arrS = S.split('');
    arrS.sort();
    const sortS = arrS.join('');
    console.log("sortS: " + sortS);
    
    //for each word in array
    for (let i=0; i<words.length; i++) {
        let arrWord = words[i].split('');
        arrWord.sort();
        let sortWord = arrWord.join('');
        console.log("sortWord: " + sortWord);
        
        if(sortS.includes(sortWord)) {
            count += 1;
            console.log("count includes: " + count);
        } else {
            let countLetter = 0;          
            //for each letter in each word
            for (let j=0; j<sortWord.length; j++) {
                let indLetter;
                
                if (j===0) {
                    indLetter = sortS.indexOf(sortWord[j]);
                } else {
                    indLetter = sortS.indexOf(sortWord[j],sortS.indexOf(sortWord[j-1])+1);
                    console.log("indLetter: "+indLetter)
                }                
                if(indLetter === -1) {
                    break;
                } else {
                    countLetter += 1;
                }
            }
            
            if (countLetter === sortWord.length) {
                count += 1;
                console.log("count: " + count);
            }
            
        }
    }
    return count;
};

//attempt 2: WRONG

var numMatchingSubseq = function(S, words) {
    let count = 0;
    
    const numLettersS = numLetters(S);
    
    for (let i=0; i<words.length; i++) {
        let numLettersWord = numLetters(words[i]);
        count += 1;
        
        for (let j=0; j<words[i].length; j++) {
         if(numLettersS[Object.keys(numLettersWord)[j]]>=Object.values(numLettersWord)[j]) {
             console.log('ok letter: ' + Object.keys(numLettersWord)[j]);
             continue;
         } else {
             count -= 1;
             break;
         }
            
        }
    }  
    
    return count;
};
    
//sorts string, gets unique values, finds # of each letter in string
var numLetters = function(S) {
    
    const arrS = S.split('');
    arrS.sort();
    const sortS = arrS.join('');  //abc order
    console.log("sortS: " + sortS);
    
    const uniqueArrS = [...new Set(arrS)]; //only unique values for S
    
    const indUniqueObjS = {};
    
    for (let i=0; i<uniqueArrS.length; i++) {
        let firstInd = sortS.indexOf(uniqueArrS[i]);
        let lastInd = sortS.lastIndexOf(uniqueArrS[i]);
        let letterCountS = lastInd - firstInd + 1;
        indUniqueObjS[uniqueArrS[i]] = letterCountS;
        
    }
    console.log("indUniqueObjS: " + Object.entries(indUniqueObjS));
    return indUniqueObjS;
}

//User solution

var numMatchingSubseq = function(S, words) {
    let results = 0;
    let hash = {};
    
    for (let i = 0; i < words.length; i++) {
        if (typeof hash[words[i][0]] === 'undefined') {
            hash[words[i][0]] = [];
        }
        
        hash[words[i][0]].push(words[i]);
    }
    
    for (let j = 0; j < S.length; j++){
        if(typeof hash[S[j]] === 'undefined') {
            continue;
        }
        
        let tempBucket = [...hash[S[j]]];
        hash[S[j]] = [];
        
        while (tempBucket.length > 0) {
            if (tempBucket[0].length === 1) {
                results++;
            }
            else {
                if(typeof hash[tempBucket[0][1]] === 'undefined') {
                    hash[tempBucket[0][1]] = [];
                }
                
                hash[tempBucket[0][1]].push(tempBucket[0].substring(1));
            }
            
            tempBucket.shift();
        }
    }
    
    return results;
};

//console.log(numMatchingSubseq("bdeepborrtqjmbuxfccdboyiedlqduslwabxqmvjkojprwsytvueqsziiuqurigxsseuzvutxpgyreozjmfgliznagkfblqgyhxw",
//["kngrzokcmspziwzmzufitqohreougdvcgofmacidzodpykujct"]));

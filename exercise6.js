function hitungHuruf(kata) {
    // you can only write your code here!
    var result = {}
    let splitted = kata.split(' ')
    // console.log(splitted)
    for(let i = 0; i < splitted.length; i++) {
            result[splitted[i]] = 0
        }
    
    for(let i = 0; i < splitted.length; i++) {
        let tempResult = {}
        for(let j = 0; j < splitted[i].length; j++) {
            if(tempResult[splitted[i][j]] === undefined) {
                tempResult[splitted[i][j]] = 1
            } else {
                tempResult[splitted[i][j]] += 1
            }
        }
        // console.log(tempResult)
        let score = 0
        for(let key in tempResult) {
            if(tempResult[key] > 1) {
                // word = splitted[i]
                score += tempResult[key]
            }
        }
        result[splitted[i]] = score
    }
    let ininih
    let scoreinih = 1
    for(let key in result) {
        if(result[key] > scoreinih) {
            ininih = key
            scoreinih = result[key]
        }
    }
    return ininih
  }

  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
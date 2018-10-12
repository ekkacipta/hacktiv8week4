function fpb(angka1, angka2){
    var itung1 = []
    var itung2 = []
    var samain = []
    for(var i = 0; i < angka1; i++){
      if(angka1 % i === 0){
        itung1.push(i)
        } 
      }
       for (var j = 0; j < angka2; j++ ){
        if(angka2 % j === 0){
          itung2.push(j)
      }
    } for(var k = 0; k < itung1.length; k++){
        for(var l = 0; l < itung2.length; l++){
          if(itung1[k] === itung2[l]){
            samain.push(itung1[k])
          }
        }
    } return samain[samain.length-1]
  }
  
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
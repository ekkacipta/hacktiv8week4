function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var angkadepan = []
    for(var i = 1; i <= angka; i++){
        for(let j = 1; j <= angka; j++) {
            if(i * j === angka) {
                angkadepan.push(String(i) + String(j))
            }
        }
    }
    // console.log(angkadepan)
    let result = angkadepan[0].length
    for(let i = 1; i < angkadepan.length; i++) {
        if(angkadepan[i].length < result) {
            result = angkadepan[i].length
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
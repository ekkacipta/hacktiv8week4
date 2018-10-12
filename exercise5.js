function ubahHuruf(kata){
    var huruf2 = 'abcdefghijklmnopqrstuvwxyz'
    var kosong = []
    for (var i = 0; i < kata.length; i++){
      kosong.push(huruf2[huruf2.indexOf(kata[i])+1])
    } 
    return kosong.join('')
  }
  
  
  
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
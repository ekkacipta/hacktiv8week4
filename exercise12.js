function shoppingTime(memberId, money){
    var harga = {
      'Sepatu Stacattu' : 1500000,
      'Baju Zoro' : 500000,
      'Baju H&N' : 250000,
      'Sweater Uniklooh' : 175000,
      'Casing Handphone' : 50000,
    }
  
    var hasil ={
      memberId : memberId,
      money : money,
      listPurchased : [],
      changeMoney : money
    }
  
    if(memberId === '' || memberId === undefined){
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else if(money < 50000){
      return "Mohon maaf, uang tidak cukup"
    } 
    else {
      for (var key in harga) {
        if (hasil.changeMoney >= harga[key]) {
          hasil.listPurchased.push(key)
          hasil.changeMoney -= harga[key]
        }
      }
      // if(hasil.changeMoney >= 1500000){
      //   hasil.listPurchased.push('Sepatu Stacattu')
      //   hasil.changeMoney -= 1500000 
      // }
      // if (hasil.changeMoney >= 500000){
      //   hasil.listPurchased.push('Baju Zoro')
      //   hasil.changeMoney -= 500000
      // }
      // if (hasil.changeMoney >= 250000){
      //   hasil.listPurchased.push('Baju H&N')
      //   hasil.changeMoney -= 250000
      // }
      // if (hasil.changeMoney >= 175000){
      //   hasil.listPurchased.push('Sweater Uniklooh')
      //   hasil.changeMoney -= 175000
      // }
      // if (hasil.changeMoney >= 50000){
      //   hasil.listPurchased.push('Casing Handphone')
      //   hasil.changeMoney -= 50000
      // }
  
  
      return hasil
    }
  }
  
  
  
  
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
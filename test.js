function balikkata(test){
    if(test.length === 1){
        return test
    }
    else {
        return test[test.length-1] + balikkata(test.slice(0,-1))
    }
}

console.log(balikkata('Hello'))
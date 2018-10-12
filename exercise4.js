function cariModus(arr) {
    // you can only write your code here!
    var objKosong = {}
    for(var i = 0; i < arr.length; i++){
        if(objKosong[arr[i]] === undefined){
            objKosong[arr[i]] = 1
        } else {
            objKosong[arr[i]] += 1
    } 
}
    let result 
    let jumlah = 1
    for(let x in objKosong) {
        if(objKosong[x] > jumlah){
            result = x
            jumlah = objKosong[x]
        } 
    }
    if(jumlah === 1 || jumlah === arr.length){
        return -1
    } else {
        return result
    } 
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
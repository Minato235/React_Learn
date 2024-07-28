var nonSpecialCount = function(l, r) {
    let count=1;
    for(let i=l;i<=r;i++){
      if(i%2==1){
          count++
      }
    }
    return count
};
let  l = 4, r = 16;
console.log(nonSpecialCount(l,r))

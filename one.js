var topKFrequent = function(nums, k) {
    let hash={};let res=[]
    // nums.sort((a,b)=>a-b)

  for(let x of nums){
    hash[x]=(hash[x]||0)+1;
  }
  let values=Object.entries(hash)
  values.sort((a, b) => b[1] - a[1]);
for(let i=0;i<k;i++){
  res.push(parseInt(values[i][0]))
}

return (res)
};
let nums = [1,1,1,1,1,2,2,3,3,3,3], k = 2
console.log(topKFrequent(nums,k))
var frequencySort = function(nums) {
let map=new Map();
for(let i=0;i<nums.length;i++){
  if(map.get(nums[i])){
    map.set(nums[i],map.get(nums[i])+1)||0;
  }else{
    map.set(nums[i],1)
  }
  return nums.sort((a,b)=>{
    const diff=map.get(a)-map.get(b)
    console.log(diff)
  })

}
};
let nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums))

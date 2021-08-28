const shuffled = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
}
export const handleShuffle =(arr)=>{
    let expression =shuffled(arr);
    return expression[0];
  }
export const handleMultiple =(arr,arr2,arr3,arr4,arr5)=>{
     return handleShuffle(arr)+handleShuffle(arr2)+handleShuffle(arr3)+handleShuffle(arr4)+handleShuffle(arr5);
  }

const cyclicSort = (arr) => {

  let i = 0
  while(i<arr.length){
    let correctIndex = arr[i] - 1
    if(arr[i]!==arr[correctIndex]) {
      swap(arr,i,correctIndex)
    }
    else {
      i++
    }
  }
  return arr
}
const swap = (arr,index1,index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}


const result = cyclicSort([3,5,2,1,4])
console.log(result)
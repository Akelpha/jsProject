function bubbleSort(array){
  

   for(let i = 0; i < array.length  ; i++){
    for(let j = 0; j < array.length - 1;j++){
        if(array[j]>array[j+1]){
            let exchangedNum = array[j];
            array[j] = array[j+1];
            array[j+1] = exchangedNum;
        }
    }
    
   }
   return array;
}


console.log(bubbleSort([8,3,5,9,4,2,7,1,6]));


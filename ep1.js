
// bài 1 
function adjacentElementsProduct(inputArray) {
    
        if (inputArray.length == 1) return 0;
        
        var maxProduct = inputArray[0] * inputArray[1];
        
        for(var i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] * inputArray[i+1] > maxProduct) {
                maxProduct = inputArray[i] * inputArray[i+1];
            }
        }
        
        return maxProduct;
    }
  console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

  
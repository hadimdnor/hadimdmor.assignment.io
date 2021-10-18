

let elfactorialNumber = document.getElementById("numberFactoral")
elfactorialNumber.addEventListener("click",function(){
    let number = document.getElementById("factoralNumber")
    let elOutput = document.getElementById("output")
    let result = factorial(number.value)
    elOutput.innerHTML = result
})
  
function factorial(n){
    let num = 1;
    if (n == 0 || n == 1){
      return num;
    }else{
      for(var i = n; i >= 1; i--){
        num = num * i;
      }
      return num;
    }  
  }


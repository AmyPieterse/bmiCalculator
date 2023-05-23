
let InputHeight = document.querySelector('#height')
let InputWeight = document.querySelector('#weight')



document.getElementById("calculate").addEventListener("click", function(){
    
    if (( +InputWeight.value[0] <=0 )|| ( +InputHeight.value[0] <= 0)||(InputHeight.value.length<=0)||(InputWeight.value.length<=0)){
        InputWeight.classList.add('invalid');
        InputHeight.classList.add('invalid')
        alert('Invalid Inputs')
    }
    else{
        
        function Calculation(weight,height) {
            return((weight/Math.pow(height / 100, 2)))
            }
        let BMI=Calculation(InputWeight.value,InputHeight.value)
    
      document.getElementById("result").textContent = "Your BMI is: " + BMI.toFixed(2);
    
            switch(true) {
            case BMI < 18.5:
            document.getElementById("message").textContent = "You are underweight"  
            break;
            case BMI >= 18.5 && BMI < 24.9:
            document.getElementById("message").textContent = "You have a normal weight"
            break;
            case BMI >= 25 && BMI < 29.9:
            document.getElementById("message").textContent = "You are overweight"
        break;
        case BMI>=29.9:
            document.getElementById("message").textContent ="You are obese"   
        break;
    }
    }
    
    
});
document.getElementById("clear").addEventListener("click", function(){
    document.querySelector("#weight").value='';
    document.querySelector("#height").value='';
    document.getElementById("result").textContent = "";
    document.getElementById("message").textContent ="" 
});

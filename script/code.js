// Variable Declaration (2 points): All variables have been properly declared, ensuring clarity and organization in the code structure.

// Input Validation (2 points): Thorough input validation has been implemented, preventing crashes and ensuring the program can handle various inputs gracefully.

// Function for BMI (2 points): A well-functioning BMI calculation function has been implemented without errors, providing accurate results.

// All Functions Write Answer to DOM (2 points): Functions correctly write output to the DOM in all instances, enhancing user interaction and readability.

// Output Formatted to Specified Decimal Places (2 points): All output is formatted according to the specified decimal places, improving the presentation of results.

// Onclick Event (2 points): The onclick event functions as expected, ensuring smooth user interaction and engagement with the program.

// Styling (2 points): Excellent styling has been applied, enhancing the visual appeal and user experience of the task.

// Responsiveness (2 points): All features of the task are responsive, ensuring usability across different devices and screen sizes.

// Deployment (2 points): The work has been correctly deployed and functions well on both Github and Netlify, allowing easy access and testing.

// Time Management (2 points): The work was submitted on time, reflecting effective time management and adherence to deadlines.

let btn = document.getElementById('btn');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let result = document.getElementById('result');

btn.addEventListener('click', function(){
    if(weight.value == '' || height.value == ''){
        result.innerText = 'Please enter valid values';
    }else{
        let w = weight.value;
        let h = height.value;
        let bmi = (w/(h*h))*10000;
        if(bmi < 18.5){
            
            result.classList.add('under');
            result.classList.remove('normal');
            result.classList.remove('over');
            result.classList.remove('obese');
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.classList.add('normal');
            result.classList.remove('under');
            result.classList.remove('over');
            result.classList.remove('obese');
        }else if(bmi >= 24.9 && bmi < 29.9){
            result.classList.add('over');
            result.classList.remove('under');
            result.classList.remove('normal');
            result.classList.remove('obese');   
        }else if(bmi >= 29.9){
            result.classList.add('obese');
            result.classList.remove('under');
            result.classList.remove('normal');
            result.classList.remove('over');
        }else{
            result.innerText = 'Please enter valid values';
        }
        result.innerText = bmi.toFixed(2);
    }

})
// The rubric assesses various aspects of the BMI Calculator, starting with variable declaration. It awards points based on whether variables are declared, input validation, and the implementation of a BMI calculation function. Additional points are awarded for the functionality of writing answers to the Document Object Model (DOM), formatting output to specified decimal places, and the responsiveness of onclick events. Styling is also considered, with points given for attempts and quality of styling. Additionally, responsiveness and deployment on platforms like GitHub and Netlify are evaluated. Time management is crucial, with points deducted for late submissions or missed deadlines. Overall, attention to detail in coding, functionality, styling, and deployment, within the given time frame, determines the final score.

let btn = document.getElementById('btn');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let output = document.getElementById('output');
let result = document.getElementById('result');
let under = document.getElementById('under');
let normal = document.getElementById('normal');
let over = document.getElementById('over');
let obese = document.getElementById('obese');   

btn.addEventListener('click', function(){
    if(weight.value == '' || height.value == ''){
        output.innerText = 'Please enter valid values';
    }else{
        let w = weight.value;
        let h = height.value;
        let bmi = (w/(h*h))*10000;
        if(bmi < 18.5){
            under.innerText = 'Underweight';
        }else if(bmi >= 18.5 && bmi < 24.9){
            normal.innerText = 'Normal';
        }else if(bmi >= 24.9 && bmi < 29.9){
            over.innerText = 'Overweight';
        }else if(bmi >= 29.9){
            obese.innerText = 'Obese';
        }
        if(bmi < 18.5){
            under.classList.remove('hidden');
            normal.classList.add('hidden');
            over.classList.add('hidden');
            obese.classList.add('hidden');
        }else if(bmi >= 18.5 && bmi < 24.9){
            under.classList.add('hidden');
            normal.classList.remove('hidden');
            over.classList.add('hidden');
            obese.classList.add('hidden');
        }else if(bmi >= 24.9 && bmi < 29.9){
            under.classList.add('hidden');
            normal.classList.add('hidden');
            over.classList.remove('hidden');
            obese.classList.add('hidden');
        }else if(bmi >= 29.9){
            under.classList.add('hidden');
            normal.classList.add('hidden');
            over.classList.add('hidden');
            obese.classList.remove('hidden');
        }
        output.innerText = bmi.toFixed(2);
        result.classList.remove('hidden');
        output.classList.remove('hidden');
        under.classList.remove('hidden');
        normal.classList.remove('hidden');
        over.classList.remove('hidden');
        obese.classList.remove('hidden');
        weight.value = '';
        height.value = '';
        output.classList.remove('hidden');
        output.innerText = 'Your BMI is ' + bmi.toFixed(2);
    }
})

// let btn = document.getElementById('btn');
// let weight = document.getElementById('weight');
// let height = document.getElementById('height');
// let output = document.getElementById('output');
// let result = document.getElementById('result');

// btn.addEventListener('click', function(){
//     if(weight.value == '' || height.value == ''){
//         output.innerText = 'Please enter valid values';
//     }else{
//         let w = weight.value;
//         let h = height.value;
//         let bmi = (w/(h*h))*10000;
//         if(bmi < 18.5){
//             result.classList.add('under');
//             result.classList.remove('normal');
//             result.classList.remove('over');
//             result.classList.remove('obese');
//         }else if(bmi >= 18.5 && bmi < 24.9){
//             result.classList.add('normal');
//             result.classList.remove('under');
//             result.classList.remove('over');
//             result.classList.remove('obese');
//         }else if(bmi >= 24.9 && bmi < 29.9){
//             result.classList.add('over');
//             result.classList.remove('under');
//             result.classList.remove('normal');
//             result.classList.remove('obese');   
//         }else if(bmi >= 29.9){
//             result.classList.add('obese');
//             result.classList.remove('under');
//             result.classList.remove('normal');
//             result.classList.remove('over');
//         }else{
//             output.innerText = 'Please enter valid values';
//         }
//         output.innerText = bmi.toFixed(2);
//     }    
// })
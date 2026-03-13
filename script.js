const textBox =document.getElementById("txtBox")
const  ToCelcius =document.getElementById("ToCelcius")
const ToFahrenheit=document.getElementById("ToFahrenheit")
const ToKelvin=document.getElementById("ToKelvin")
const result=document.getElementById("result")
const MyButton=document.getElementById("My button")
let temp;


function convertTemperature() {
    if(ToFahrenheit.checked){
    temp = Number (textBox.value);
    temp = (temp * 9/5) + 32;
    result.textContent = temp.toFixed(1) + "°F";
    }
    else if (ToCelcius.checked){
    temp = Number (textBox.value);
    temp = (temp - 32) * 5/9;
    result.textContent = temp.toFixed(1) + "°C";
    }
    else if (ToKelvin.checked){
    temp = Number (textBox.value);
    temp = temp + 273.15;
    result.textContent = temp.toFixed(1) + "K";
    }
    else{
        result.textContent = "Select a unit";
    } 
}
convertTemperature();
MyButton.addEventListener("click", convertTemperature);
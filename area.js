var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calArea = document.querySelector("#cal-area");
var resetArea = document.querySelector("#reset-area");
var displayArea = document.querySelector("#display-area");

calArea.addEventListener("click" , function calculateArea(event){
    event.preventDefault();
    // console.log(displayArea);
    b= parseInt(base.value);
    h= parseInt(height.value);
        console.log(b,h);
        if(b == 0 || h == 0 ){
            displayArea.style.display= "none";
        }
        else{

            var area = (0.5 * b * h);
            console.log(area);
            displayArea.style.display = "block";
            displayArea.innerText= "Area of triangle is " + area;
        }
});

resetArea.addEventListener("click" , function reset(){
    displayArea.innerText="";
});
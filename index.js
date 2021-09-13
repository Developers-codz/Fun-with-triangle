const firstAngle = document.querySelector("#angle1");
const secondAngle = document.querySelector("#angle2");
const thirdAngle = document.querySelector("#angle3");
const checkBtn = document.querySelector("#check-is-triangle");


const msgPara = document.querySelector("#msg-para");
const reset = document.querySelector("#reset")

checkBtn.addEventListener("click" , function check(event){
    event.preventDefault();
   
    first = Number(firstAngle.value);
    second = Number(secondAngle.value);
    third = Number(thirdAngle.value);
    // console.log(first , second , third);
    if(first ==0 || second ==0 || third == 0 ){
        msgPara.style.display="none";
    }
    else{
        msgPara.style.display="block";
    if((first+second+third)==180){
       msgPara.innerText="yaay! It is triangle";
    }
    else{
         msgPara.innerText="Ooops, not a triangle";
    }
    }
    
})
reset.addEventListener("click" , function clearPara(){
    msgPara.style.display="none";
})

// area page





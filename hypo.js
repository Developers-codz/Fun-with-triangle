var perpendicular = document.querySelector("#perpendicular");
var base = document.querySelector("#base");
var calHypoBtn = document.querySelector("#cal-hypo");
const resetHypo = document.querySelector("#reset-hypo");
const displayHypo = document.querySelector("#display-hypo");

calHypoBtn.addEventListener("click" , function check(event){
    event.preventDefault();
   
    b = Number(base.value);
    p = Number(perpendicular.value);
    
    if(b == 0 || p == 0 ){
        displayHypo.style.display="none";
    }
    else{
        displayHypo.style.display="block";
        const hypo = Math.sqrt(b*b + p*p) ;
        
        displayHypo.innerText = hypo;

    }
    
})
resetHypo.addEventListener("click" , function clearPara(){
    displayHypo.innerText = ""

})

let grandmotherVisible = false; 
let grandfatherVisible = false; 

function showVariantsGrandma(x) {
    if (!x) {
        document.getElementsByClassName('grandmother-menu')[0].style.visibility = "visible";
        grandmotherVisible = true;
    } else {
        document.getElementsByClassName('grandmother-menu')[0].style.visibility = "hidden";
        grandmotherVisible = false;
    }
};
    

function showVariantsGrandpa(x) {
    if (!x) {
        document.getElementsByClassName('grandfather-menu')[0].style.visibility = "visible";
        grandfatherVisible = true; 

    } else {
        document.getElementsByClassName('grandfather-menu')[0].style.visibility = "hidden";
        grandfatherVisible = false;
    }
};
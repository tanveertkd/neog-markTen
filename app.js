const primaryBill = document.querySelector(".primary-bill");
const primaryBtnNext = document.querySelector(".primary-btn-next");

const primaryInputCash = document.querySelector(".primary-input-cash");
const primaryCash = document.querySelector(".primary-cash");
const primaryBtnChange = document.querySelector(".primary-btn-change");

const primaryError = document.querySelector(".primary-error");

const primaryDenomination = document.querySelector(".primary-denomination");
const primaryOutput = document.querySelector(".primary-output");

const note = document.querySelectorAll(".note");

const notes = [2000, 500, 100, 20, 10, 5, 1];

primaryInputCash.style.display = "none";
primaryError.style.display = "none";
primaryDenomination.style.display = "none"

primaryBtnNext.addEventListener("click", ()=>{
    if(primaryBill.value > 0){
        // primaryBtnNext.disabled = true;
        primaryInputCash.style.display = "block";
        primaryError.style.display = "none";
    } else {
        errorHandler("Enter a valid bill amount.");
    }
})

primaryBtnChange.addEventListener("click", ()=>{

    let totalBill = parseInt(primaryBill.value);
    let totalCash = parseInt(primaryCash.value);

    if(totalBill>0 && totalCash>0){
        if(totalBill>totalCash){
            errorHandler("The bill is higher than the amount paid");
            return;
        } else {
            let totalChange = totalCash-totalBill;
            if(totalChange<1){
                errorHandler("Nothing to return.");
            }else{
                primaryDenomination.style.display = "block"
                primaryError.style.display = "none";
                for(let i=0; i<notes.length; i++){
                    let notesToReturn = Math.floor(totalChange/notes[i]);
                    totalChange=totalChange-notesToReturn*notes[i];
                    note[i].innerText = `${notesToReturn}`;
                }
            }
        }
    } else {
        errorHandler("Invalid inputs.");
    }
})

const errorHandler = (e) => {
    primaryError.style.display="block";
    primaryError.innerText=e;
}
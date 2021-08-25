function getInputValue(number,price,isIncreasing){
    const inputCase=document.getElementById(number + '-number');
    let inputAmount=inputCase.value;
    if(isIncreasing==true){
        inputAmount=parseInt(inputAmount) +1;
    }
    else if(inputAmount > 0){
        inputAmount=parseInt(inputAmount) -1;
    }
    inputCase.value=inputAmount;
    const updateTotal=document.getElementById(number + '-total');
    updateTotal.innerText=inputAmount * price;
    getCalculatedBalance();
}
function getValue(product){
    const phoneInput=document.getElementById(product + '-number');
    const phoneNumber=parseInt(phoneInput.value);
    return phoneNumber;
}
function getCalculatedBalance(){
    const phoneTotal=getValue('phone') * 1219;
    const caseTotal=getValue('case') * 59;
    const subTotal=phoneTotal + caseTotal;
    const tax=subTotal/10;
    const total=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-total').innerText=tax;
    document.getElementById('total').innerText=total;
}
///Case handler
document.getElementById('case-plus').addEventListener('click', function(){
    getInputValue('case',59,true);  
})

document.getElementById('case-minus').addEventListener('click',function(){
    getInputValue('case',59,false);
})
///phone handler
document.getElementById('phone-plus').addEventListener('click', function(){
    getInputValue('phone',1219,true);  
})

document.getElementById('phone-minus').addEventListener('click',function(){
    getInputValue('phone',1219,false);
})

let BILLamount=document.forms.billamount
let tippercentage=document.forms.tippercentage
let tip=document.getElementById("total")
// console.log(BILLamount)
function tipcaculator(){
    let number1=Number(BILLamount.value)
    let number2=Number(tippercentage.value)
    tip.innerHTML=number1+number2
    return tip.innerHTML
}
// xong 1project
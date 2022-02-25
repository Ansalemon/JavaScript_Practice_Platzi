//Functions
const dblPriceWithSale = (intPriceNeto,intSale)=>(intPriceNeto*(100-intSale))/100


//////////
//Interaction with HTML

function dblHtmlPriceHTML(){
    var inputA = document.getElementById("intInputPrice");
    var valueA = new Number(inputA.value);
    var inputB = document.getElementById("intInputDiscount");
    var valueB = new Number(inputB.value);
    var inputResult = document.getElementById("intResultPrice");
    var priceWithSaleResult=dblPriceWithSale(valueA,valueB);
    inputResult.innerText ="The price with discount is: "+ priceWithSaleResult;
    //alert(priceWithSaleResult);
}
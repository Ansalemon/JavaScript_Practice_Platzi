//Functions
const dblPi=Math.PI;
const squarePerimeter =(squareSide) => squareSide * 4;
const squareArea =(squareSide) => squareSide * squareSide;
const trianglePerimeter = (triangleSideA,triangleSideB,triangleBaseC) => triangleSideA + triangleSideB + triangleBaseC;
const triangleArea = (triangleBaseC,triangleHeight) => (triangleBaseC * triangleHeight) / 2;
const dblDiameter=(dblRadius)=>dblRadius*2
const CirclePerimeter =(dblRadius)=> dblDiameter(dblRadius)*dblPi
const CircleArea=(dblRadius)=> (dblRadius*dblRadius)*dblPi
const TrianguleAreaIso = (triangleSideA,triangleBaseC)=>(triangleBaseC*4)*Math.sqrt((4*triangleSideA^2)-triangleBaseC^2);
//end Functions
//Square Code
/* console.group("Square exercice");
const squareSide = 5;
console.log("The square sides measure: " + squareSide + " cm");
console.log("The square perimeter is: " + squarePerimeter(squareSide) + " cm");
console.log("The square perimeter is: " + squareArea(squareSide) + " cm^2");
console.groupEnd();
//end Square Code
//Triangle Code
console.group("Triangle exercice");
const triangleSideA=6;
const triangleSideB=8;
const triangleBaseC=10;
const triangleHeight=10.5;
console.log(
    "The triangle sides measure: "
     + triangleSideA 
     + " cm,"
     +triangleSideB 
     + " cm,"
     +triangleBaseC
     + " cm"
);
console.log("The Heigth of the triangle is: " + triangleHeight + " cm")
console.log("The triangle perimeter is: " + trianglePerimeter(triangleSideA,triangleSideB,triangleBaseC) + " cm");
console.log("The triangle area is: " + triangleArea(triangleBaseC,triangleHeight) + " cm^2");
console.groupEnd();
//end Triangule Code

//Circle Code
console.group("Circle exercice");
const dblRadius=4
console.log("The circle radius is: " + dblRadius + " cm");

console.log("The circle diameter is: " + dblDiameter(dblRadius) + " cm");

console.log("The PI is: " + dblPi);

console.log("The circle perimeter is: " + CirclePerimeter(dblRadius) + " cm");

console.log("The circle area is: " + CircleArea(dblRadius) + " cm^2");
console.groupEnd(); */
//end Circle Code




//////////////
// intereaccion HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro=squarePerimeter(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro=squareArea(value);
    alert(perimetro);
}
function calcularPerimetroTriangulo(){ 
    var inputA = document.getElementById("triangleBaseA");
    var valueA = new Number(inputA.value);
    var inputB = document.getElementById("triangleBaseB");
    var valueB = new Number(inputB.value);
    var inputC = document.getElementById("triangleBaseC");
    var valueC = new Number(inputC.value);
    var perimetro=trianglePerimeter(valueA,valueB,valueC);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputC = document.getElementById("triangleBaseC");
    const valueC = new Number(inputC.value);
    const inputHeight = document.getElementById("triangleHeight");
    const valueHeight = new Number(inputHeight.value);
    const perimetro=triangleArea(valueC,valueHeight);
    alert(perimetro);
}
function calcularPerimetroCirculo(){
    const inputRad = document.getElementById("InputRadio");
    const valueRad = new Number(inputRad.value);
    const perimetro=CirclePerimeter(valueRad);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const inputRad = document.getElementById("InputRadio");
    const valueRad = new Number(inputRad.value);
    const perimetro=CircleArea(valueRad);
    alert(perimetro);
}
function calcularPerimetroTrianguloIcs(){ 
    var inputA = document.getElementById("triangleBaseAIcs");
    var valueA = new Number(inputA.value);
    var inputB = document.getElementById("triangleBaseBIcs");
    var valueB = new Number(inputB.value);
    var inputC = document.getElementById("triangleBaseCIcs");
    var valueC = new Number(inputC.value);
    var perimetro=trianglePerimeter(valueA,valueB,valueC);
    alert(perimetro);
}
function calcularAreaTrianguloIcs(){
    var inputA = document.getElementById("triangleBaseAIcs");
    var valueA = new Number(inputA.value);
    var inputC = document.getElementById("triangleBaseCIcs");
    var valueC = new Number(inputC.value);
    var perimetro=TrianguleAreaIso(valueA,valueC);
    alert(perimetro);
}
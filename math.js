const ladoCuadrado = document.querySelector('#lado');
const btnCuadrado = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultCuadrado');

btnCuadrado.addEventListener('click', calcularCuadrado);

function calcularCuadrado(){

    console.log(ladoCuadrado.value)

    const perimetroCuadrado = ladoCuadrado.value*4;

    const areaCuadrado=ladoCuadrado.value*ladoCuadrado.value;
  
    pResult.innerHTML ="<div class=\"resultado\"><div>Perimetro: "+perimetroCuadrado+" cm</div>"+"<div>Area: "+areaCuadrado+" cm2</div></div>";

}

const lado1Triangulo = document.querySelector('#lado1Triangulo');
const lado2Triangulo = document.querySelector('#lado2Triangulo');
const baseTriangulo = document.querySelector('#baseTriangulo');
const alturaTriangulo = document.querySelector('#alturaTriangulo');
const btnTriangulo = document.querySelector('#btnCalcularTriangulo');
const pResultTriangulo = document.querySelector('#resultTriangulo');

btnTriangulo.addEventListener('click', calcularTriangulo);

function calcularTriangulo(){


    const perimetroTriangulo = Number(lado1Triangulo.value)+Number(lado2Triangulo.value)+Number(baseTriangulo.value);

    const areaTriangulo=(baseTriangulo.value*alturaTriangulo.value)/2;
  
    pResultTriangulo.innerHTML ="<div class=\"resultado\"><div>Perimetro: "+perimetroTriangulo+" cm</div>"+"<div>Area: "+areaTriangulo+" cm2</div></div>";

}

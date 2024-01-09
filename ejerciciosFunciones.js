/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

function perimetroCirculo(radio) {
    return (radio * radio ) * Math.PI;
}

function areaRectangulo (base,altura) {
    return base * altura;
}

function numeroAlCuadrado (num) {
    return num * num;
}

function conversionTemp (grados) {
    return grados * 33.8;
}

function voltaje (R, I) {
    return R * I;
}

function volumenEsfera (radio) {
    return (4/3) * (radio * radio * radio) * Math.PI;
}

const perimetroCirculo1 = (radio) => (radio * radio ) * Math.PI

const areaRectangulo1 = (base,altura) => base * altura

const numeroAlCuadrado1 = (num) => num * num

const voltaje1 = (R, I) => R * I

const volumenEsfera1 = (radio) => (4/3) * (radio * radio * radio) * Math.PI

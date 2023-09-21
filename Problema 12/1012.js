// const valorA = parseFloat((3.0).lines[0]);
// const valorB = parseFloat((4.0).lines[1]);
// const valorC = parseFloat((5.2).lines[2]);
// const pi = 3.14159;


// const calcTriangulo = (valorA * valorC) / 2;

// const areaRaio = pi * valorC * valorC;

// const areaTrapezio = ((valorA + valorB) * valorC) / 2;

// const areaQuadrado = valorB * valorB;

// const areaRetangulo = valorA * valorB;

// console.log(`TRIANGULO: ${calcTriangulo.toFixed(3)}`);
// console.log(`CIRCULO: ${areaRaio.toFixed(3)}`);
// console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
// console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
// console.log(`QUADRADO: ${areaRetangulo.toFixed(3)}`);

function calcular(lines) {
    //     const raio = parseFloat(lines[0]);
    const [valorA, valorB, valorC] = lines[0].split(" ").map(Number);
    const pi = 3.14159;

    const calcTriangulo = (valorA * valorC) / 2;

    const areaRaio = pi * Math.pow(valorC, 2)

    const areaTrapezio = ((valorA + valorB) * valorC) / 2;

    const areaQuadrado = valorB * valorB;

    const areaRetangulo = valorA * valorB;

    console.log(`TRIANGULO: ${calcTriangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${areaRaio.toFixed(3)}`);
    console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);

}

console.log(calcular([3.0, 4.0, 5.2]))
// Código na forma plataforma beecrowd
// function calcularVolumeEsfera(lines) {
//     const raio = parseFloat(lines[0]);
//     const pi = 3.14159;

//     const volume = (4/3) * pi * Math.pow(raio, 3);
//     console.log(`VOLUME = ${volume.toFixed(3)}`);
// };



// Código na forma normal
const calcularVolumeEsfera = (pi, raio) => {

    let volume = (4 / 3.0) * pi * Math.pow(raio, 3)
    return (`VOLUME = ${volume.toFixed(3)}`)
}

console.log(calcularVolumeEsfera(3.14159, 3))
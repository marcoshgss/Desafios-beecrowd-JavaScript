// No canto dos números coloque variaveis !!
// let value1 = [12, 1, 5.30] = [0].split(' ');
// let value2 = [16, 2, 5.10] = [1].split(' ');
 


// function calcularValor(lines) {
//     const space = ' '
//     const [cod, qtd1, valorUni] = lines.[0]
//     const [cod1, qtd2, valorUni1] = lines.[1]

//     const valorSerPago = (qtd1 * valorUni) + (qtd2 * valorUni1)
//     return(`VALOR A PAGAR: ${valorSerPago}`)
// }

// console.log(calcularValor([1,5.30], [2,5.30]))
// const result = calcularValor()

// var line1 = lines.shift().split(' ');
// var cod1 = parseInt(line1[0]);
// var n1 = parseInt(line1[1]);
// var valor1 = parseFloat(line1[2]);

// var line2 = lines.shift().split(' ');
// var cod2 = parseInt(line2[0]);
// var n2 = parseInt(line2[1]);
// var valor2 = parseFloat(line2[2]);

// var total = (n1 * valor1) + (n2 * valor2);
// console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));

// function calcular(values) {
//     const [cod, qtd1, valorUni] = values
//     const [cod1, qtd2, valorUni1] = values

//     const valorSerPago = (qtd1 * valorUni) + (qtd2 * valorUni1)
//     console.log(`VALOR A PAGAR: R$ ${valorSerPago}`)
// }

// console.log(calcular([1,5.30], [2,5.30]))

function calcularValor(lines) {
    const space = ' '
    const [cod, qtd1, valorUni] = lines[0].split(space)
    const [cod1, qtd2, valorUni1] = lines[1].split(space)

  const valorSerPago = (qtd1 * valorUni) + (qtd2 * valorUni1)
  return(`VALOR A PAGAR: ${valorSerPago.toFixed(2)}`)
}


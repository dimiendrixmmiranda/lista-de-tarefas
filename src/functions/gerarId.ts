export default function gerarId() {
    const arrayDeNumeros = []
    for (let i = 0; i <= 5; i++) {
        const numeroGerado = (Math.random() * 10).toFixed(0)
        arrayDeNumeros.push(numeroGerado)
    }
    const numero = parseInt(arrayDeNumeros.join().replace(/,/gi, ''))
    return numero
}
export function calcular(numero1: string, numero2: string, operacao: string, base: number) {
    const n1c = parseInt(numero1, base)
    const n2c = parseInt(numero2, base)

    let calculado

    switch (operacao) {
        case '+':
            calculado = n1c + n2c
            break
        case '-':
            calculado = n1c - n2c
            break
        case '*':
            calculado = n1c * n2c
            break
        case '/':
            calculado = n1c / n2c
            break
    }

    return calculado?.toString() as string
}
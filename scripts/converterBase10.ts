export function converterBase10(decimal: number, paraBase: number) {
    let paraDividir = decimal
    let convertido = ''

    const tabela = (v: number) => '0123456789abcdef'.charAt(v)

    do {
        convertido += tabela(paraDividir % paraBase)
        paraDividir = Math.floor(paraDividir / paraBase)
    } while (paraDividir >=  paraBase)

    convertido += tabela(paraDividir)
    convertido = convertido.split('').reverse().join('')

    convertido.charAt(0)=="0"?convertido=convertido.substring(1):''

    return convertido
}
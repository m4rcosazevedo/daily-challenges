// nesse caso, essa variável nao fica global
const currencyFormat = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

// não funciona no browser
module.exports = class CurrencyManager {
  static format(valor) {
    return currencyFormat.format(valor)
  }
}
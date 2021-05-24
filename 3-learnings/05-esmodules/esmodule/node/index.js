const CurrencyManager = require("../shared/currency-manager")

function updateOutput(value) {
  console.log(value)
}

const inputMonitor = (value) => updateOutput(CurrencyManager.format(value))

const input = process.openStdin()
console.log('typing...')
input.addListener("data", inputMonitor)

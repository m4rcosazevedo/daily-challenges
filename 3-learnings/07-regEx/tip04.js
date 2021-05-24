const heroes = `NickName: Chapolin, Power: Velocidade
Nick: Batman Power: Money`

const regex = /(NickName|Nick):\s(?<nickname>\w+),\sPower:\s(?<power>\w.*)/

const result = heroes.replace(regex, (substring, _, nickname, power, ...args) => {
  return `${nickname} ${power}`
})

//console.log(result);

const resultSingleLine = heroes.replace(regex, '$<nickname> $<power>')
console.log(resultSingleLine);
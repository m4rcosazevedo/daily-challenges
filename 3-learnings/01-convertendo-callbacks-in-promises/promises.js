/*
* Deve criar arquivo se não existe e adicionar texto
* Deve adicionar informações e arquivo existente se existir
*/
// Se arquivo muito grande, usar a statSync no lugar de existsSync
const { existsSync, appendFile, writeFile } = require('fs')
const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const { promisify } = require('util')

const writeFileAsync = promisify(writeFile)
const appendFileAsync = promisify(appendFile)

const functionToPromise = (func, ...args) => {
  return new Promise(resolve => func(...args, resolve))
}

const questionFunc = terminal.question.bind(terminal)
const questionAsync = msg => functionToPromise(questionFunc, `${msg}\n`)

;(async function main() {
  try {
    const fileName = await questionAsync('Qual é o arquivo que deseja trabalhar')
    const text = await questionAsync('Escreva algo para incluir')
    const fileExists = existsSync(fileName)
    if (fileExists) {
      await appendFileAsync(fileName, `\n${text}`)
      console.log('adicionado com sucesso')
      return;
    }
    await writeFileAsync(fileName, text)
  } catch (err) {
    console.log('deu ruim!!', err)
  } finally {
    console.log('processo finalizado!')
    terminal.close()
  }
})() 
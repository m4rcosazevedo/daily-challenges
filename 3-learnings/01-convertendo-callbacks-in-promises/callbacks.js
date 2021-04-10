/*
* Deve criar arquivo se não existe e adicionar texto
* Deve adicionar informações e arquivo existente se existir
*/

const { exists, appendFile, writeFile } = require('fs')

const readline = require('readline')

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

terminal.question('Qual é o arquivo que deseja trabalahr\n', fileName => {
  exists(fileName, (has) => {
    if (has) {
      terminal.question('O arquivo já existe! Escreva algo para incluir\n', text => {
        if (!text) {
          console.log('o texto indicado é invalid! tente novamente')
          return;
        }
        appendFile(fileName, `${text}\n`, err => {
          if (err) {
            console.log('error ao adicionar texto no arquivo.')
            return;
          }
          console.log('texto adicionado com sucesso!')
          terminal.close()
        })
      })
    } else {
      terminal.question('O arquivo não existe! Escreva algo para incluir\n', text => {
        if (!text) {
          console.log('O Texto indicado é invalid! Tente novamente')
          return;
        }
        writeFile(fileName, `${text}\n`, error => {
          if (error) {
            console.log('erro ao adicionar texto no arquivo.')
            return;
          }
          console.log('texto adicionado com sucesso!')
          terminal.close()
        })
      })
    }
  })
})
const app = require('./src/app')
const CryptoHelper = require('./src/crypto-helper')
const CustomFsPromises = require('./src/custom-fs-promises');
const Decorator = require('./src/decorator');

;(async () => {
  const config = {
    cryptoKey: 'minha-senha-super-segura' // 24 caracteres
  }

  const cryptoHelper = await CryptoHelper.setup(config)
  const customFsPromises = new CustomFsPromises({ cryptoHelper }).configure()
  Decorator.decorateModule(customFsPromises, require('fs').promises)

  await app.run()
})()

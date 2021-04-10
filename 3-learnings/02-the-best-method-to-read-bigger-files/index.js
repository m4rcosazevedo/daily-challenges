import { dirname, join } from 'path' 
import { promisify } from 'util'
import { promises, createReadStream, createWriteStream } from 'fs'
import { pipeline, Transform } from 'stream'
const pipelineAsync = promisify(pipeline)

import csvtojson from 'csvtojson'
import jsontocsv from 'json-to-csv-stream'
import StreamConcat from 'stream-concat'

const { readdir } = promises
import debug from 'debug'
const log = debug('app:concat')

const { pathname: currentFile } = new URL(import.meta.url)
const cwd = dirname(currentFile)
const filesDir = `${cwd}/dataset`.replace('/C:\\', '').replace('/', '').replace('%20', ' ')
const output = `${cwd}/merge.csv`.replace('/C:\\', '').replace('/', '').replace('%20', ' ')

console.time('concat-data')
const files = (await readdir(filesDir))
  .filter(item => !(!!~item.indexOf('.zip')))

log(`processing ${files}`)

setInterval(() => process.stdout.write('.'), 1000).unref()

// const combinedStreams = createReadStream(join(filesDir, files[0]))
const streams = files.map(item => 
  createReadStream(join(filesDir, item))
)
const combinedStreams = new StreamConcat(streams)

const finalStream = createWriteStream(output)
const handleStream = new Transform({
  transform: (chunk, encoding, cb) => {
    const data = JSON.parse(chunk)
    const output = {
      fullName: `${data.first_name} ${data.last_name}`
    }
    return cb(null, JSON.stringify(output))
  }
})

await pipelineAsync(
  combinedStreams,
  csvtojson({ delimiter: ';' }),
  handleStream,
  jsontocsv(),
  finalStream
)

log(`${files.length} files merged! on ${output}`)
console.timeEnd('concat-data')

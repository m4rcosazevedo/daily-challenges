// --------------------- NODE 14
// Nullish Coalescing
valor1 = 'abc'
valor2 = 'abd'
valorFinal = valor1 || valor2
// 'abc'


valor1 = false
valorFinal = valor1 || valor2
//'abd'

valorFinal = (0 || false || '') || (null || undefined)
// 'abd'

valorFinal = false ?? true
// false

(null || undefined) ?? true
// true

// Optional Chaining
db = {}
// {}
db?.user?.preferences['username'].length
// undefined

db = { user : {} }
// { user: {} }
db?.user?.preferences?.['username'].length
// undefined

db = { user : { preferences: () => ({ result: 1 }) } }
db?.user?.preferences?.().result
// 1

// --------------------- NODE 15
// String.replaceAll
// Promise.any
// Local assignment operators &&=, ||=, ??= etc...

// --------------------- NODE 16
import { setTimeout } from 'timers/promises'
async function run () {
  await setTimeout(3000)
  console.log('running after 3 seconds')
}

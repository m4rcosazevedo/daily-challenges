const Queue = () => {
  const data = []

  const total = () => {
    return data.length
  }

  const add = (value) => {
    data.unshift(value)
  }

  const remove = () => {
    if (data.length === 0) return -1

    const value = data[data.length - 1]
    data.splice(data.length - 1, 1)

    return value
  }

  const print = (prefix = '') => console.log(prefix, data)

  return {
    add,
    remove,
    print,
    total
  }
}
// testing
const timeStart = new Date()
const totalInitItems = 1999
const totalRemoteItems = 999
const queue = Queue()
for (let i = 0; i < totalInitItems; i++) {
  queue.add(i)
}
console.log('total queue', queue.total())
for (let i = 0; i < totalRemoteItems; i++) {
  queue.remove()
}
const timeEnd = new Date()
console.log('total queue atual', queue.total())
console.log('duration', timeEnd - timeStart, 'ms...')

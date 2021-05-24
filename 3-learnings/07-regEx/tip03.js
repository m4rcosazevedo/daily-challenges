const date = "2021-05-12"
const regex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

const match = regex.exec(date)
const { groups: { year, month, day } } = match
//const { year, month, day } = groups

console.log({ year, month, day })
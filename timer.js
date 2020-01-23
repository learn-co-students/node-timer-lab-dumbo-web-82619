let input = process.argv.slice(2)[0]
let start

if (input.slice(-1) === 's') {
  start = parseInt(input.slice(0, -1), 10)
} else if (input.slice(-1) === 'n') {
  start = parseInt(input.slice(0, -3), 10) * 60
} else {
  console.log('Must enter time in seconds or minutes (no spaces). e.g. \'60s\' or \'1min\'')
  process.exit(1)
}

function timer() {
  start -= 1
  console.log(`Left: ${start}s`)
  if (start === 0) {
    console.log('DING! Time\'s up.')
    clearInterval(timer)
    process.exit(0)
  }
}

setInterval(timer , 1000)

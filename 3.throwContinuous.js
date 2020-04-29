const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve (true) : re)

console.log('Begin')

coinFlip.then((data) => console.log(data))
.catch((err) => { throw err })
.then(() => console.log('End1'))

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
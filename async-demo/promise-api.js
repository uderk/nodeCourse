const p = Promise.resolve({ id: 1, username: 'veni' })
p.then((user) => console.log(user))

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1 ...')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async op 2 ...')
    resolve(2)
  }, 2000)
})

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))

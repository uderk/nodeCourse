const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
    reject(new Error('message'))
  }, 2000)
  //reject(new Error('message'))
})

p.then((result) => console.log(result)).catch((err) =>
  console.log('Error', err.message)
)

// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

getCustomerA()

async function getCustomerA() {
  let movies
  const customer = await getCustomer(1)
  console.log('Customer: ', customer)
  if (customer.isGold) {
    movies = await getTopMovies()
    console.log('Top movies: ', movies)
  }
  const email = await sendEmail(customer.email, movies)
  console.log(email)
}

function getCustomer(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'mosh.hamedani@abv.bg'
      })
    }, 4000)
  })
}

function getTopMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2'])
    }, 4000)
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ emai: email, movies: movies })
    }, 4000)
  })
}

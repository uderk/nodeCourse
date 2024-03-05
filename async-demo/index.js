console.log('before')
// getUser(2, (user) => {
//   getRepositories(user.gitHubUserName, (username) => {
//     getCommits('repo1', displayCommits)
//   })
// })

// getUser(3)
//   .then((user) => getRepositories(user.gitHubUserName))
//   .then((repo) => getCommits(repo.repositories[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log(err))

console.log('after')

displayCommits()

// async and await
async function displayCommits() {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUserName)
    const commits = await getCommits(repos[0])
    console.log(commits)
  } catch (error) {
    console.log(error.message)
  }
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading from the datebase')
      resolve({ id: id, gitHubUserName: 'deni' })
      reject(new Error('this is error in get User'))
    }, 2000)
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('logging into GitHub')
      resolve({ username: username, repositories: ['repo1', 'repo2'] })
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting commits')
      resolve({ repo: repo, commits: ['cm1', 'cm2', 'cm3'] })
    })
  })
}

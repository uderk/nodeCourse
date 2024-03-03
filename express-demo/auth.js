function auth(next) {
  console.log('Authenticating...')
  next();
}

module.exports = auth;

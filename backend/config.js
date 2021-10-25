const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3003",
          credentials: true
        }
      ]
    }
  }
}

module.exports = config
var movies = require('./data.json')

module.exports = function(app) {
  app.requestsProcessed = 0

  app.get('/api/movies', function(req, res) {
    app.requestsProcessed++

    res.json(movies)
  })

  app.get('/api/writeandend', function(req, res) {
    app.requestsProcessed++

    res.write('a')
    res.write('b')
    res.write('c')

    res.end()
  })

  app.get('/api/testcachegroup', function(req, res) {
    app.requestsProcessed++
    req.apicacheGroup = 'cachegroup'

    res.json(movies)
  })

  app.get('/api/text', function(req, res) {
    app.requestsProcessed++

    res.send('plaintext')
  })

  app.get('/api/html', function(req, res) {
    app.requestsProcessed++

    res.send('<html>')
  })

  app.get('/api/missing', function(req, res) {
    app.requestsProcessed++

    res.status(404)
    res.json({ success: false, message: 'Resource not found' })
  })

  app.get('/api/movies/:index', function(req, res) {
    app.requestsProcessed++

    res.json(movies[index])
  })

  return app
}

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
// Endpoint 1 - /api1
app.get('/api1', (req, res) => {
  const items = [
    { id: 1, name: 'rosu' },
    { id: 2, name: 'negru' },
    { id: 3, name: 'albastru' },
    { id: 4, name: 'roz' },
    { id: 5, name: 'verde' },
    { id: 6, name: 'violet' },
    { id: 7, name: 'portocaliu' },
  ]
  res.json(items)
})

// Endpoint 2 - /api2
app.get('/api2', (req, res) => {
  const items = [
    { id: 8, name: 'caine' },
    { id: 9, name: 'pisica' },
    { id: 10, name: 'gaina' },
    { id: 11, name: 'rata' },
    { id: 12, name: 'gasca' },
    { id: 13, name: 'curcan' },
    { id: 14, name: 'porc' },
  ]
  res.json(items)
})

// Start the server
const port = 8000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

const express = require('express')

const { engine: expressHandlebars } = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('О Meadowlark Travel')
})

// Пользовательская страница 404
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 — Не найдено')
})


// Пользовательская страница 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express запущен на http://localhost:${port}; ` +
  `нажмите Ctrl+C для завершения.`))

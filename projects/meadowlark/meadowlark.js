const express = require('express')
const expressHandlebars = require('express-handlebars')


const app = express()

const port = process.env.PORT || 3000

// Настройка механизма представлений Handlebars.
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
  }))

app.set('view engine', 'handlebars')
  

app.get('/', (req, res) => res.render('home')
    //{
  //res.type('text/plain') //Устанавливает Content-type
 // res.send('Meadowlark Travel');
//}
)

app.get('/about', (req, res) => res.render('about')
//    {
//  res.type('text/plain')
//  res.send('О Meadowlark Travel')
//}
)
  

// custom 404 page
app.use((req, res) => {
  //res.type('text/plain')
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  //res.type('text/plain')
  res.status(500)
  res.render('500')
})

app.listen(port, () => console.log(
  `Express запущен на http://localhost:${port}; ` +
  `Нажмите Ctrl+C для завершения.`))

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hellow proper!')
})

server.listen(port, () => console.log(`сервер запущен на порте ${port}; ` +
  'нажмите Ctrl+C для завершения...'))


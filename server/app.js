const Koa = require('koa')
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

io.on('connection', () => {

  /* … */
})

app.use(async ctx => {
  ctx.body = 'hello'
})
server.listen(7243, () => {
  console.log('run: http://127.0.0.1:7243')
})

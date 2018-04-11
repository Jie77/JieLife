const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const app = new Koa()
const Port = 3000

let router = new Router()

app.use(cors({
  origin: '*'
}))

app.use(koaBody({ multipart: true }))

router.post('/login',async (ctx,next)=>{

  let photos = ctx.request.body.files || {}
  console.log(photos)
  for(let key in photos) {
    let photo = photos[key]
    let filePath = path.join(__dirname, `${photo.name}.${photo.type.split('/')[1]}`)
    let reader = fs.createReadStream(photo.path)
    let writer = fs.createWriteStream(filePath)
    reader.pipe(writer)
  }

  ctx.body = ctx.request.body

})

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(Port,()=>{
  console.log(`Listening on ${Port}`)
})


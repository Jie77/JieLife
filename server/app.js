const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const monk = require('monk')
const app = new Koa()

const Port = 3000
const url = 'localhost:27017/JieLife'
const db = monk(url);
db.then(() => {
  console.log('Connected correctly to server')
})
const collection = db.get('user')

let router = new Router()
let pageId = 1

app.use(cors({
  origin: '*'
}))

app.use(require('koa-static')(__dirname + '/public'))
app.use(koaBody({ multipart: true }))

router.get('/search', async (ctx,next)=>{
  try{
    let houses = await collection.find({})
    ctx.body = houses
  }catch(e){
    console.log('error'+e)
    ctx.body = 'error'
  }
  
})

router.get('/detail', async (ctx,next)=>{
  let id = ctx.query.id
  console.log(id)
  ctx.body="hh"
  try{
    let houses = await collection.find({pageId: ~~id})
    ctx.body = houses
  }catch(e){
    console.log('error'+e)
    ctx.body = 'error'
  }
  
})

router.post('/publish',async (ctx,next)=>{
  let arr = Object.keys(ctx.request.body.files)
  let imageList = []
  if(arr.length != 0){
    let files = ctx.request.body.files.photos
    if(Object.prototype.toString.call(files) === '[object Array]'){
      files.forEach(photo=>{
        let filePath = path.join(__dirname, 'public','image', `${photo.name}`)
        let imageUrl = `http://127.0.0.1:3000/image/${photo.name}`
        imageList.push(imageUrl)
        let reader = fs.createReadStream(photo.path)
        let writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
      })
    }else{
        let filePath = path.join(__dirname, 'public','image', `${files.name}`)
        let reader = fs.createReadStream(files.path)
        let writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
    }
  }
  
  let args = ctx.request.body.fields
  collection.insert({
    'title': args.title,
    'describe': args.describe,
    'rent': args.rent,
    'houseId': args.houseId,
    'place': args.place,
    'imageList': imageList,
    'pageId': pageId++
  })
  ctx.body = ctx.request.body
})


app.use(router.routes())
   .use(router.allowedMethods())

app.listen(Port,()=>{
  console.log(`Listening on ${Port}`)
})


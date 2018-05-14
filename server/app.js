const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const monk = require('monk')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const app = new Koa()

const Port = 3000
const url = 'localhost:27017/JieLife'
const db = monk(url);
db.then(() => {
  console.log('Connected correctly to server')
})
const housesCollection = db.get('houses')
const userCollection = db.get('user')

let router = new Router()
let pageId = null

app.use(cors({
  origin: '*'
}))

app.use(require('koa-static')(__dirname + '/public'))
app.use(koaBody({ multipart: true }))

router.get('/search', async (ctx,next)=>{
  try{
    let houses = await housesCollection.find({})
    ctx.body = houses
  }catch(e){
    console.log('error'+e)
    ctx.body = 'error'
  }
  
})

router.get('/detail', async (ctx,next)=>{
  let id = ctx.query.id
  // console.log(id)
  ctx.body="hh"
  try{
    let houses = await housesCollection.find({pageId: id})
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
        let imageUrl = `http://127.0.0.1:3000/image/${files.name}`
        imageList.push(imageUrl)
        let reader = fs.createReadStream(files.path)
        let writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
    }
  }
  
  let args = ctx.request.body.fields
  let md5 = crypto.createHash('md5')
  md5.update(`${Date.now()}`)
  housesCollection.insert({
    'title': args.title,
    'describe': args.describe,
    'rent': args.rent,
    'houseId': args.houseId,
    'place': args.place,
    'imageList': imageList,
    'pageId': md5.digest('hex')
  })
  ctx.body = ctx.request.body
})

router.post('/login', async (ctx,next)=>{
  let args = ctx.request.body.fields
  console.log(args)
  let hash = crypto.createHash("sha256")
  let pwd = hash.update(args.pwd).digest("hex")
  try{
    let user = await userCollection.find({user: args.user})
    console.log(user)
    if(user[0].pwd === pwd){
      let privateKey = 'jiangjie'//这里应该使用私钥用来签名，后来的验证要使用公钥
      let token = jwt.sign({user:user[0].user},privateKey,{ expiresIn: '1h' })  //默认使用sha256
      ctx.body = {
        success: true,
        message: token
      }
    }else{
      ctx.body = {
        success: false,
        message: "用户名或密码错误"
      }
    }
  }catch(e){
    console.log('error'+e)
    ctx.body = 'error'
  }
})

router.post('/reg', async (ctx,next)=>{
  let args = ctx.request.body.fields
  let hash = crypto.createHash("sha256")
  let pwd = hash.update(args.pwd).digest("hex")
  try {
    userCollection.insert({
      'user': args.user,
      'pwd': pwd
    })
    ctx.body = 'success'
  }catch(e){
    ctx.body = 'false'
  }
  
})


app.use(router.routes())
   .use(router.allowedMethods())

app.listen(Port,()=>{
  console.log(`Listening on ${Port}`)
})


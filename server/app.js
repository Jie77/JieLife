const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const app = new Koa()
const Port = 3000

let router = new Router()

app.use(cors())

router.post('/login',async (ctx,next)=>{
  let postData = await parsePostData( ctx )
  ctx.body = postData
})

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(Port,()=>{
  console.log(`Listening on ${Port}`)
})

function parsePostData(ctx){
  return new Promise((resolve,reject)=>{
    try{
      let postData = ''
      ctx.req.on('data',(data)=>{
        postData += data
      })
      ctx.req.on('end',()=>{
        postData = parseData(postData)
        resolve(postData)
      })
    }catch(e){
      reject(e)
    }
  })
}

function parseData(str){
  let res = {}
  let arr = str.split('&')
  let t = null
  for(let item of arr){
    t = item.split('=')
    res[t[0]] = decodeURI(t[1])
  }
  return res
}
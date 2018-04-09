const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const router = new Router()

const index = (ctx,next)=>{
    ctx.response.body = 'hello world'
    ctx.cookies.set(
        'name', 'jiangjie'
    )
    ctx.response.set('suth','affsadsaa')
    console.log(ctx.response.header)
}

const main = (ctx,next)=>{
    ctx.response.body = 'here is main page'
}

router
    .get('/',index)
    .get('/main',main)

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
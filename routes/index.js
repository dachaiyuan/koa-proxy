const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/api/proxy', async (ctx, next) => {
  ctx.body = {
    code:0,
    data:{
      user:'zhangsan'
    },
    message:'ok'
  }
})

router.post('/test',async (ctx, next) => {
  ctx.body = {
    code:0,
    data:{
      user:'text'
    },
    message:'sss'
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

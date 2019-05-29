const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')
const redis = require('redis')
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype);
const db = redis.createClient()

const server = new Koa()
const router = new Router()

router.get('/', ctx => {
    ctx.body = 'GET'
})

router.post('/story', bodyParser(), async ctx => {
   await db.setAsync('WISP', 'IO ONE LOVE')
    ctx.body = { data: ctx.request.body }
})

server.use(logger('tiny')).use(router.routes()).listen(3001);
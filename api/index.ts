import express from 'express'
import Router from './routes'

const app = express()

app.use('/', Router)

export default {
  path: '/api',
  handler: app,
}

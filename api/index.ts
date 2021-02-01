import express from 'express'
import mongoose from 'mongoose'
import consola from 'consola'
import middleware from './middlewares'

// Init Express app and append routes
const app = express()

middleware(app)

// Connect to DB
mongoose.connect(
  process.env.MONGO_URI || '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => consola.success('Successfully connected to MongoDB')
)

export default {
  path: '/api',
  handler: app,
}

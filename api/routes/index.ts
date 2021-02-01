import { Application } from 'express'
// Importing Routes
import AuthRouter from './auth.router'

export default (app: Application) => {
  app.use('/auth', AuthRouter)
}

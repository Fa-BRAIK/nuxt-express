import express, { Application } from 'express'
import router from '../routes'

// @desc Parent middleware function to
// run the entire middlware list
// (including routes middlware)
export default (app: Application) => {
  // BodyParser middleware
  app.use(express.json())

  router(app)
}

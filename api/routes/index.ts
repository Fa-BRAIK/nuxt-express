import router, { Request, Response } from 'express'
import Controller from '../core/controllers/Controller'

const Router = router()

Router.get('/', Controller.index)

export default Router

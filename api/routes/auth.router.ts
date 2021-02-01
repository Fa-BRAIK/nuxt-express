import router, { Request, Response } from 'express'
import auth from '../middlewares/auth'
import AuthController from '../controllers/auth.controller'

const Router = router()

// @desc get a user's info
// @route /api/auth
Router.post('/', [auth], AuthController.auth)

// @desc register a user
// @route /api/auth/register
Router.post('/register', AuthController.register)

// @desc login a user
// @route /api/auth/login
Router.post('/login', AuthController.login)

// @desc login a user
// @route /api/auth/logout
Router.post('/logout', AuthController.logout)

export default Router

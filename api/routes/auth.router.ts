import router, { Request, Response } from 'express'
import AuthController from '../controllers/auth.controller'

const Router = router()

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

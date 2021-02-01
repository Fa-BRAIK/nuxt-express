import { Request, Response } from 'express'
import User from '../models/user.model'

export default class AuthController {
  public static async register(request: Request, response: Response) {
    const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    })

    try {
      response.status(201).send(await user.save())
    } catch (err) {
      response.status(400).send(err)
    }
  }

  public static async login(request: Request, response: Response) {
    response.status(200).json({ message: 'login' })
  }

  public static async logout(request: Request, response: Response) {
    response.status(200).json({ message: 'logout' })
  }
}

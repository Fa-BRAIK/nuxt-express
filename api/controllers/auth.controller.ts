import { Request, Response } from 'express'
import User from '../models/user.model'
import { CreateUserValidator } from '../validations/user.validations'

export default class AuthController {
  public static async register(request: Request, response: Response) {
    const { error } = CreateUserValidator.validate(request.body)
    if (error) return response.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({ email: request.body.email })

    if (emailExist) {
      return response.status(400).send('Email already exists')
    }

    const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    })

    try {
      return response.status(201).send(await user.save())
    } catch (err) {
      return response.status(400).send(err)
    }
  }

  public static async login(request: Request, response: Response) {
    response.status(200).json({ message: 'login' })
  }

  public static async logout(request: Request, response: Response) {
    response.status(200).json({ message: 'logout' })
  }
}

import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import {
  CreateUserValidator,
  LoginValidator,
} from '../validations/user.validations'
import User from '../models/user.model'

export default class AuthController {
  public static async register(request: Request, response: Response) {
    const { error } = CreateUserValidator.validate(request.body)
    if (error) return response.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({ email: request.body.email })
    if (emailExist) return response.status(400).send('Email already exists')

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(request.body.password, salt)

    const user = new User({
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword,
    })

    try {
      return response.status(201).send({ id: (await user.save()).id })
    } catch (err) {
      return response.status(400).send(err)
    }
  }

  public static async login(request: Request, response: Response) {
    const { error } = CreateUserValidator.validate(request.body)
    if (error) return response.status(400).send(error.details[0].message)

    const user: any = await User.findOne({ email: request.body.email })
    if (!user) return response.status(400).send('Wrong Credentials')

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    )
    if (!validPassword) return response.status(400).send('Wrong Credentials')

    response.status(200).json({ message: 'login' })
  }

  public static async logout(request: Request, response: Response) {
    response.status(200).json({ message: 'logout' })
  }
}

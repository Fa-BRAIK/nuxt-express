import { Request, Response, NextFunction } from 'express'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log('Fired off ')

  const token = request.header('authorization')

  if (!token) return response.status(401).send({ message: 'Access Denied' })

  try {
    const verified: any = jwt.verify(
      token.split(' ')[1],
      process.env.TOKEN_SECRET || 'secret'
    )
    const user: any = await User.findById(verified._id)
    user.password = undefined
    request.user = user

    next(null)
  } catch (err) {
    response.status(401).send({ message: 'Invalid Token' })
  }
}

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default (request: Request, response: Response, next: NextFunction) => {
  console.log('Fired off ')

  const token = request.header('authorization')

  if (!token) return response.status(401).send({ message: 'Access Denied' })

  try {
    const verified = jwt.verify(
      token.split(' ')[1],
      process.env.TOKEN_SECRET || 'secret'
    )
    request.user = verified

    next(null)
  } catch (err) {
    response.status(401).send({ message: 'Invalid Token' })
  }
}

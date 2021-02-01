import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const auth = (request: Request, response: Response, next: NextFunction) => {
  const token = request.header('auth-token')

  if (!token) return response.status(401).send({ message: 'Access Denied' })

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET || 'secret')
    request.user = verified

    next(null)
  } catch (err) {
    response.status(401).send({ message: 'Invalid Token' })
  }
}

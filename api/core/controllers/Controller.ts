import { Request, Response } from 'express'

export default class Controller {
  public static index(request: Request, response: Response) {
    response
      .status(200)
      .json({ message: 'This is an api endpoint fron Nuxtjs using express!' })
  }
}

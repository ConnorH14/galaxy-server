import BaseController from '../utils/BaseController'
import { starService } from '../services/StarService'

export class StarController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}

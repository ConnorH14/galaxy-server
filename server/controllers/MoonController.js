import BaseController from '../utils/BaseController'
import { moonService } from '../services/MoonService'

export class MoonController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonService.getAll()
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const moon = await moonService.create(req.body)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }
}

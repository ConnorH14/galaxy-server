import BaseController from '../utils/BaseController'
import { planetService } from '../services/PlanetService'

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const planet = await planetService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}

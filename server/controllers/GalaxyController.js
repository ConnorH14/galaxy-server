import BaseController from '../utils/BaseController'
import { galaxyService } from '../services/GalaxyService'
import { starService } from "../services/StarService"

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:galaxyId/stars', this.getStars)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxyService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxyService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      const stars = await starService.getStarsByGalaxyId(req.params.galaxyId)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}

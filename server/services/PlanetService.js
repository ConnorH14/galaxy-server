import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetService {

  async getAll() {
    let planets = await dbContext.Planets.find({})
    return planets
  }

  async create(planetData) {
    if (!planetData) { throw new BadRequest('Invalid Data') }
    let newplanet = await dbContext.Planets.create(planetData)
    return newplanet
  }

}

export const planetService = new PlanetService()
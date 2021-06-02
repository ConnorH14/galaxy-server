import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxyService {

  async getAll() {
    let galaxies = await dbContext.Galaxies.find({})
    return galaxies
  }

  async create(galaxyData) {
    if (!galaxyData) { throw new BadRequest('Invalid Data') }
    let newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }

}

export const galaxyService = new GalaxyService()
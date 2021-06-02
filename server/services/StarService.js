import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarService {

  async getStarsByGalaxyId(galaxyId) {
    return await dbContext.Stars.find({ galaxyId }).populate('galaxy', 'name')
  }

  async getAll() {
    let stars = await dbContext.Stars.find({})
    return stars
  }

  async create(starData) {
    if (!starData) { throw new BadRequest('Invalid Data') }
    let newStar = await dbContext.Stars.create(starData)
    return newStar
  }

}

export const starService = new StarService()
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonService {

  async getAll() {
    let moons = await dbContext.Moons.find({})
    return moons
  }

  async create(moonData) {
    if (!moonData) { throw new BadRequest('Invalid Data') }
    let newMoon = await dbContext.Moons.create(moonData)
    return newMoon
  }

}

export const moonService = new MoonService()
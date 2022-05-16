import mongoose from 'mongoose'
import { hash } from '../../utility/crypto'

export const register = async (name: string, email: string, password: string) => {
  try {
    const User = mongoose.model('User')

    const exitingUser = await User.findOne({ email })
    if (exitingUser) throw { message: 'User already registered' }

    return await new User({
      name: name,
      email: email,
      password: await hash(password),
      roles: ['publisher'],
    }).save()
  } catch (e) {
    console.error(e)
    throw e
  }
}

import api from '@/api/api'
import type { User } from '@/types/User'

class UserService {
  list() {
    return api.get('/users')
  }

  create({ name, age, job }: User) {
    return api.post('/users', { name, age, job })
  }
}

export default new UserService()

import api from '@/api/api'

class UserService {
  list() {
    return api.get('/users')
  }
}

export default new UserService()

import api from '../api/config'

class AuthService {
  static instance = new AuthService();
  
  login({ email, password }) {
    return api.post("/auth/signIn", { email: email , password: password }); 
  }
}

export default AuthService.instance;